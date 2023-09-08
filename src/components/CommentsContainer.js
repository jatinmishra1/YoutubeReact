
const commenstData=[
    {
        name:"jatin",
        text:"loprem ipsium"  ,
        replies:[

        ] 
     },

     {
        name:"jatin",
        text:"loprem ipsium"  ,
        replies:[
            {
                name:"jatin",
                text:"loprem ipsium"  ,
                replies:[
                    {
                        name:"jatin",
                        text:"loprem ipsium"  ,
                        replies:[
                            
                        ] 
                     }
                ] 
             },
             {
                name:"jatin",
                text:"loprem ipsium"  ,
                replies:[
                    {
                        name:"jatin",
                        text:"loprem ipsium"  ,
                        replies:[
                            
                        ] 
                     },
                     {
                        name:"jatin",
                        text:"loprem ipsium"  ,
                        replies:[
                            
                        ] 
                     },
                     {
                        name:"jatin",
                        text:"loprem ipsium"  ,
                        replies:[
                            {
                                name:"jatin",
                                text:"loprem ipsium"  ,
                                replies:[
                                    {
                                        name:"jatin",
                                        text:"loprem ipsium"  ,
                                        replies:[
                                            {
                                                name:"jatin",
                                                text:"loprem ipsium"  ,
                                                replies:[
                                                    
                                                ] 
                                             }
                                        ] 
                                     }
                                ] 
                             }
                        ] 
                     }
                ] 
             }
        ] 
     },
     {
        name:"jatin",
        text:"loprem ipsium"  ,
        replies:[
            
        ] 
     },
     {
        name:"jatin",
        text:"loprem ipsium"  ,
        replies:[
            {
                name:"jatin",
                text:"loprem ipsium"  ,
                replies:[
                    {
                        name:"jatin",
                        text:"loprem ipsium"  ,
                        replies:[
                            {
                                name:"jatin",
                                text:"loprem ipsium"  ,
                                replies:[
                                    {
                                        name:"jatin",
                                        text:"loprem ipsium"  ,
                                        replies:[
                                            
                                        ] 
                                     }
                                ] 
                             }
                        ] 
                     }
                ] 
             },
             {
                name:"jatin",
                text:"loprem ipsium"  ,
                replies:[
                    
                ] 
             }

        ] 
     }
    ]

    const Comment=({data})=>{
        const {name,text,replies}=data
        return (
            <div className="flex shadow-sm bg-gray-100 rounded-lg">
         
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NJCUu9ndUoKJch4Rtb0ntXaEloTipQFqKieiskM&s" className="w-12 h-12"/>
                <div className="px-3" >
                    <p className="font-bold">{name}</p>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
    const CommentList=({comments})=>{
        return comments.map((comment,index)=>{
            return(
                <div>
                <Comment key={index} data={comment}/>
                <div className="pl-5 border border-black-100 ml-5">
                {/* <Comment  key={index} data={comment}/> */}
                <CommentList  key={index} comments={comment.replies}/>
                </div>
                </div>
            )
        })
    }
const CommentsContainer=()=>{
    return (
        <>
        <div className="m-5 p-2">
           <h1 className="text-2xl font-bold">Comments:</h1>
           {/* <Comment data={commenstData[0]}/>
            */}
            <CommentList comments={commenstData}/>
        </div>
        </>
    )
}
export default CommentsContainer