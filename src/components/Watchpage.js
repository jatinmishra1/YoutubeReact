import react, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

    const Watchpage=()=>{
        const params=useParams()    //for queryy we do not use useParams as it is not able to fecth params in good way
        ///so we use useSearchParams
        const [searchParams]=useSearchParams()
        console.log(searchParams.get("v")) //this is how we get parameter value using searchParams
        const dispatch=useDispatch();
        useEffect(()=>{
            dispatch(closeMenu())
        },[])
        return (
            <div className='flex flex-col'>
            <div className='px-5' >
                <iframe width="1200"
                height="600" 
                src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
            <div>
                <CommentsContainer/>
            </div>
            </div>
        )
        
    }
    export default Watchpage
    