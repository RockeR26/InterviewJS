import React,{useRef, useState} from 'react'

const ToDo = () => {
const[task,setTask]=useState("")
const [list,setList]=useState([])

let id =useRef(1)

const handleClick=()=>{
    const uid=id.current++;
    setList([...list,{name:task,id:uid,check:false}]);
}
const handleDelete=(id)=>{
      setList(list.filter(item=>item.id!==id))
      
}

const handleCheck=(id)=>{
    setList(list.map((item)=>{
        if(item.id===id){
            return {...item,check:!item.check}
        }
        return item;
    }))
    
}



  return (
    <div className='conatiner'>
        <h1>Todo List</h1>
        <div className='inputText'>
            <input type="text" placeholder='Enter todo' value={task} onChange={e=>setTask(e.target.value)} />
            <button disabled={!task||task.trim()===""} onClick={handleClick}>Add</button>
        </div>
        <div>
                {list.length>0&&<ul>
                    {list.map((item)=><li key={item.id}><span><input type="checkbox" checked={item.check} onChange={()=>handleCheck(item.id)} /></span><span style={item.check?{textDecoration:"line-through"}:{textDecoration:"none"}}>{item.name} </span> <button onClick={()=>handleDelete(item.id)}>delete</button></li>)}
                </ul>}

        </div>
    </div>
  )
}

export default ToDo