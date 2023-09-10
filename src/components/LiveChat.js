import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import store from "../utils/store";
import { addMessage } from "../utils/chatSlice";
import{ generateName}  from "../utils/helper";

const LiveChat=()=>{
    const [liveMessage,setLiveMessage]=useState("")
    const dispatch=useDispatch();
    const chatMessages=useSelector(store=>store.chat.messages);
    // console.log(chatMessages)

    useEffect(()=>{
       const i= setInterval(()=>{
        //API Polling
        console.log("api poling")
        // console.log(randomNameGenerator.res)
        dispatch(addMessage({
            name:generateName(),
            text:`${generateName()} bhi ${generateName()} ${generateName()}`
        }))
        },1500)
        return ()=>{
            clearInterval(i)
        }
    },[])
    return (
        <>
        <div className="w-full h-[600px] ml-2 p-2 border border-gray-100  bg-slate-100 rounded-lg shadow-sm overflow-y-scroll flex flex-col-reverse" >
         <div> {
                chatMessages.map((c)=>{
                    return (
                        <ChatMessage name={c.name} text={c.text}/>
                    )
                })
            } 
            </div> 
        </div>
        <form className="w-full p-2 ml-2 border border-black " onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:"jatin mishra",
                text:liveMessage
            }))
           setLiveMessage("")
           }}>
            <input className="w-full " type="text" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/> 
            <button className="px-2 mx-2 bg-green-300" >Send</button>
        </form>
        </>
    )
}
export default LiveChat