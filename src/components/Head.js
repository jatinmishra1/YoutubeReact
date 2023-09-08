import react, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import {cacheResults} from "../utils/searchSlice"

const Head=()=>{
    const [searchQuery,setSearchQuery]=useState("");
    const [suggestions,setSuggestions]=useState([])
    const [ShowSuggestions,setShowSuggestions]=useState(false)
    const searchCache=useSelector(store=>store.search)
    
    useEffect(()=>{
        //API Call

        //make an api call after every key press
        //but if the difference between 2api calls is <200ms
        //decline the api call
        const timer=setTimeout(()=>{
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }else{
                getSearchSuggestion()
            }
            
        },200)
        return ()=>{
            clearTimeout(timer)
        }
        
    },[searchQuery])

    const getSearchSuggestion=async()=>{
const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
const json=await data.json();
setSuggestions(json[1])
console.log(suggestions)
dispatch(cacheResults({
[searchQuery]:json[1]
}))
// console.log(json)
    }
    const dispatch=useDispatch();
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
    return (
       <div className='grid grid-flow-col p-5 m-2 shadow-lg  '>
        <div className='flex col-span-1' >
            <img onClick={()=>toggleMenuHandler()} className='h-9 mx-2 cursor-pointer' alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEXz9fQzMzMqKir3+fixs7J+fn76/Ps2Njbq6uogIiEgICD19/by9PP7/fwlJSXu8O9pamqeoJ+Tk5PLzcxcXFwYFxgMDg1CQ0Ld3d2kpqVLTUw1ODcYGhkODw8+TbZ+AAABM0lEQVR4nO3bWW7DMAwFQNtqUydK4ux773/N5gj9oQkoMwcw8CDJBCSy6wAAAAAAAAAAAAAAAAAAAAAAmF8t0WpywPXxK9ZxnRtxPJ1Xsc6nMTFi3ey2fbTtbpOXsJsu4QH7/jLlLWIdZ0mYuU031yE84HDN3KXlOGyHWNvhWBITduV2+I51uJV1ZsKuLqIlV3wAAACgFTX0lqHGfv4/FtMYa0p+min3x/Mn0PP5uGdGXC/25/Ab4dc+8b60llV4wL5fZiZs/t1irjVMPIhllnO4yAv4Llf3R+Sv9O1xzy2JtbReD+O1ng8AAACYSd003l86S49wasDm+7yb79X/gHeL6XeOhIkzM137c091PL2WsV6ps2vzzB8mP1w0P0MKAAAAAAAAAAAAAAAAAAAAAPCh/gCmZy+HEE0S5QAAAABJRU5ErkJggg==" />
            <img className='h-9' alt="logo" src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=2000"/>
        </div>

        <div className=' flex col-span-10 px-12  '>
            {/* <div> */}
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' value={searchQuery} onChange={(e)=>{
                setSearchQuery(e.target.value)
            }}
            onFocus={()=>{
                setShowSuggestions(true)
            }}
            onBlur={()=>{
                setShowSuggestions(false)
            }}
            />
            <button className=' border border-gray-400 p-2 rounded-r-full'> searchBar
            </button>
            {/* </div> */}
           { ShowSuggestions && <div className='fixed my-10 mx-2 bg-white py-12 px-5 w-[34rem] shadow-lg rounded-lg border border-gray-200'>
                <ul>
                    {/* <li className='py-2 shadow-sm hover:bg-gray-100'>Search iphone</li>
                    <li className='py-2 shadow-sm hover:bg-gray-100'>Search iphone</li>
                    <li className='py-2 shadow-sm hover:bg-gray-100'>Search iphone</li>
                    <li className='py-2 shadow-sm hover:bg-gray-100'>Search iphone</li> */}
                         {/* <li className='py-2 shadow-sm hover:bg-gray-100'>Search iphone</li> */}
                    {
                       
                        suggestions.map((s)=>{
                            return (
                                <li key={s} className='py-2 shadow-sm hover:bg-gray-100'>{s}hindi</li>
                            )
                           
                        })
                    }
                    
                </ul>
            </div>}
        </div>

        <div className='col-span-1'>
            <img className='h-8' alt="prifile-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NJCUu9ndUoKJch4Rtb0ntXaEloTipQFqKieiskM&s"></img>
        </div>
       </div>
    )
}
export default Head