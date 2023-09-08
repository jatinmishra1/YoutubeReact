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
//Higher order component -it is the function which receives the component and return the component
//we can take the example of youtube Add video box like something ...that is for some special data it is doing something differnt 
//i.e modifyinh the component
//Read from documentation
export const  Addcard=({info})=>{
return(
    <div className='p-1 m-1 border border-red-900'>
        <VideoCard infos={info}/>
    </div>
)
}
export default VideoCard
