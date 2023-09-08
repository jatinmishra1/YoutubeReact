import { useEffect } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import store from "../utils/store";
import { addMessage } from "../utils/chatSlice";
import{ generateName}  from "../utils/helper";

const LiveChat=()=>{
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
        },1000)
        return ()=>{
            clearInterval(i)
        }
    },[])
    return (
        <div className="w-full h-[600px] ml-2 p-2 border border-gray-100  bg-slate-100 rounded-lg shadow-sm overflow-y-scroll flex flex-col-reverse" >
            {
                chatMessages.map((c)=>{
                    return (
                        <ChatMessage name={c.name} text={c.text}/>
                    )
                })
            }
            
        </div>
    )
}
export default LiveChat