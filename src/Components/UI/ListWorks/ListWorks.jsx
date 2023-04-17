import React, { useState, useEffect } from 'react'
import { Loader } from 'semantic-ui-react'
import { size, map } from "lodash"
import { Work, Postulate } from '../../../api'
import { WorkItem } from '../WorkItem/WorkItem'
import { useAuth } from '../../../hooks'

const workController = new Work()
const postulateController = new Postulate()

export function ListWorks(props) {
    const { worksActive, reload, onReload } = props
    const [ works, setWorks ] = useState(null)
    const [ postulates, setPostulates ] = useState(null)

    const { user, accessToken } = useAuth()

    useEffect(() => {
        (async () => {
            try {
                if(user == null){
                    console.log("No hay usuario");
                } else {                    
                    setPostulates(null)
                    const response = await postulateController.getPostulatesMe(accessToken, user)
                    setPostulates(response)
                }
            } catch (error) {
                console.error(error);
            }
        })()
    }, [worksActive, reload])

    useEffect(() => {
        (async () => {
            try {
                setWorks(null)
                const response = await workController.getWorks(worksActive)
                setWorks(response)
            } catch (error) {
                console.error(error);
            }
        })()
    }, [worksActive, reload])

    if(!works) return <Loader active inline="centered" />
    if(size(works) === 0) return "No hay ningun trabajo"

  return map(works, (work) => <WorkItem key={work._id} work={work} onReload={onReload} postulate={map(postulates,(postulate)=>{return postulate})} />)
}