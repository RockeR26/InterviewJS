import React, { useEffect, useState } from 'react'

const Task = () => {
    const [items,setItems]=useState([{title:"new message",time:Date.now(),status:false},{title:"new message",time:Date.now(),status:false},{title:"new message",time:Date.now(),status:false}]);
    
    useEffect(()=>{
        let t=setInterval(()=>{
            setItems(prev=>[...prev,{title:"new message",time:Date.now(),status:false}])
        },5000)
        return()=>clearInterval(t);
    },[])

    const ReadMessage=(ind)=>{
        const update=items.map((item,index)=>{
            if(ind===index){
                return {...item,status:true}
            }else{
                return item;
            }
        })

        setItems(update);
    }
    
    return (
    <div>
        <ul>
            {items.map((item,index)=><li key={item.title+index} style={{"cursor":"pointer","margin":"5px","backgroundColor":item.status?"green":"gray"}} onClick={()=>ReadMessage(index)}>{item.title+" "+(index+1)}-{item.time}</li>)}
        </ul>
    </div>
  )
}

export default Task