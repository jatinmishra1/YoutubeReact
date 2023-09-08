
import react, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API, data_youtube } from '../utils/constant'
import { Link } from 'react-router-dom'
import VideoCard, { Addcard } from './VideCard'
// import { data_youtube } from '../utils/constant'
const VideoContainer=()=>{
// const sapna={
//     name:"raajgeer",
//     age:19
// }
    const [videos,setVideos]=useState([])
 
    useEffect(()=>{
           getVideos();
    },[]);
    const getVideos=async()=>{
        const data=await fetch(YOUTUBE_VIDEO_API)
        const json=await data.json();
        
        // console.log(json.items)
        setVideos(json.items)
        // await setVideos(data_youtube)
        // console.log(videos)
        
    }
    // console.log(videos)
    
    return ( 
        <div className='flex flex-wrap'>
            { videos[1] && <Addcard info={videos[1]}/>}
             {
                videos.map((video)=>{ 
                    return (
                        <Link key={video.id} to={"/watch?v="+video.id}>
                         <VideoCard infos={video} key={video.id}/>
                    </Link>
                    )
                    
                   
                })
             }
             
             
        </div>
    )
}
export default VideoContainer