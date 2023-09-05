import react from 'react'
const VideoCard=({infos,key})=>{

    const info=infos
    return (
        
                    <div className=' p-2 m-2 w-72 shadow-lg'>
                    <img className='rounded-lg ' alt="thumbnail" src={info.snippet.thumbnails.medium.url}></img>
                   <ul>
                       <li className='font-bold' >{info.snippet.channelTitle}</li>
                       <li>{info.snippet.title}</li>
                       <li>{info.snippet.thumbnails.viewCount} views</li>
                   </ul>
                   
               </div>
        
       
    )
}
export default VideoCard
