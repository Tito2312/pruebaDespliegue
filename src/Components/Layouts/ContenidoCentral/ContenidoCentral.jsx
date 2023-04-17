import React, { useState } from 'react'
import { Button } from "semantic-ui-react"
import { ListWorks } from '../../UI/ListWorks/ListWorks'
import { WorkForm } from '../../UI/WorkForm/WorkForm'
import { BasicModal } from '../../UI/BasicModal/BasicModal'

export const ContenidoCentral = () => {
  const [ showModal, setShowModal ] = useState(false)
  const [ reload, setReload ] = useState(false)

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState)
  const onReload = () => setReload((prevState) => !prevState)

  return (
    <>
      <section className='ContenidoCentral'>
        {/* <Button className='btnCreateWork' onClick={onOpenCloseModal}>
        Nuevo trabajo</Button> */}
        <ListWorks worksActive={true} reload={reload} onReload={onReload} />
      </section>
      <BasicModal show={showModal} close={onOpenCloseModal} title="Crear nuevo trabajo">
        <WorkForm close={onOpenCloseModal} onReload={onReload} />
      </BasicModal>
    </>
  )
}