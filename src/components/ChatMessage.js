import react from 'react'

const ChatMessage=({name,text})=>{
    return (
        <div className='flex items-center'>
            <img class="h-8" alt="prifile-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NJCUu9ndUoKJch4Rtb0ntXaEloTipQFqKieiskM&amp;s"></img>
            <span className='font-bold px-2'>{name}:</span>
            <span>{text}</span>
        </div>
    )
}
export default ChatMessage