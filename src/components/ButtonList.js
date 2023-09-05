
import react from 'react'
import Button from './Button'
const ButtonList=()=>{
    const lists=["All","Game","Sports","News","Dnace","Music","Cricket","International"];
    return (
        <div className='flex'>
            {/* <Button name="All"/>
            <Button name="Game"/>
            <Button name="Sports"/>
            <Button name="News"/> */}
            {
                lists.map((list)=>{
                    return (
                        <Button name={list} key={list}/>
                    )
                   
                })
            }
        </div>
    )
}
export default ButtonList