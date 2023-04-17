import React, { useState, useEffect } from 'react'
import { HeaderHome } from '../../Layouts/HeaderHome/HeaderHome'
import { MessageWorks } from '../../UI/MessageWorks/MessageWorks'
import { MenuLateral } from '../../Layouts/MenuLateral/MenuLateral'
import { ListChats } from '../../UI/ListChats/ListChats'
import { Work, Chat as ChatMessage } from '../../../api'
import { useAuth } from '../../../hooks'
import io from "socket.io-client"
const socket = io("https://work-services.onrender.com")

const chatController = new ChatMessage()
const workController = new Work()

export const Chat = () => {
    const { accessToken, user } = useAuth()
    const [ reload, setReload ] = useState(false)
    const onReload = () => setReload((prevState) => !prevState)

    const [ works, setWorks ] = useState(null)
    const [ storedMessages, setStoredMessages ] = useState(null)
    const [ firstTime, setfirstTime ] = useState(false)
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const [idWork, setIdWork] = useState('')
    const [ nameWork, setNameWork ] = useState('')

    function click(listen, workName){
        getDates(listen, workName)
    }

    async function getDates(listen, workName){
        setIdWork(listen)
        setNameWork(workName)
        if(!firstTime){
            setStoredMessages(null)
            const response = await chatController.getMessages(accessToken, listen)
            setStoredMessages(response)
        }
        setfirstTime(false)
        setMessages([])
    }

    useEffect(() =>{
        const receivedMessage = (message) =>{
          if(message.work === idWork){
                setMessages([...messages, message])
          }
        }
        socket.on('message', receivedMessage)
    
        const scroll = document.getElementById("messageChat")
        scroll.scrollTop = scroll.scrollHeight

        return () => {
          socket.off('message', receivedMessage)
        }
      }, [messages, idWork, storedMessages])
    
    const sendMessage = async (e) => {
        e.preventDefault()

      socket.emit('message', message, user.firstname, idWork)

      setMessage('')
      setMessages([])

        if(idWork!==""){
          await chatController.saveMessage(accessToken, user, idWork, message)
        }

        setStoredMessages(null)
        const response = await chatController.getMessages(accessToken, idWork)
        setStoredMessages(response)

        const scroll = document.getElementById("messageChat")
        scroll.scrollTop = scroll.scrollHeight
    }

    useEffect(() => {
        (async () => {
            try {
                setWorks(null)
                const response = await workController.getWorks(false)
                setWorks(response)
            } catch (error) {
                console.error(error);
            }
        })()
    }, [reload])
    
  return (
    <div id='Chat'>
        <HeaderHome></HeaderHome>
        <div className='containerChat'>
            <div className='containMenuLateral'>
                <MenuLateral />
            </div>
            <div className='worksChat'>
                <ListChats click={click} works={works} reload={reload} onReload={onReload} />
            </div>
            <div id='messageChat'>
                {idWork === "" ? "" : 
                <div className='titleChat'>
                    <p className='titleMessage'>{`Bienvenido al chat ${nameWork} ahora puedes enviar mensajes`}</p>
                </div>
                }
                {storedMessages==null ? "" : storedMessages.map((message, index)=>{
                    return (
                        <MessageWorks key={index} content={message.nameUser === user.firstname ? `Yo: ${message.message}` : `${message.nameUser}: ${message.message}`}
                            style={message.nameUser === user.firstname ? "messageWorks" : "messageWorks2"}
                        />
                    )
                })}
                {messages===[] ? "" : messages.map((message, index)=>{
                    return (
                        <MessageWorks key={index} content={`${message.from}: ${message.body}`}
                            style={message.from === "Yo" ? "messageWorks" : "messageWorks2"}
                        />
                    )
                })}
                {idWork === "" ? "" : <form className='sendMessage' onSubmit={sendMessage}>
                    <input className='inputMessage' type="text" placeholder='Envia un mensaje'
                        onChange={e => setMessage(e.target.value)} value={message}
                    />
                    <button className='buttonChat'>Enviar</button>
                </form>}
            </div>
      </div>
    </div>
  )
}
