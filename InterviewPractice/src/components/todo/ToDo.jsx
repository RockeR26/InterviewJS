import { useRef, useState } from "react"

const ToDo = () => {
const [list,setList]=useState([])
const inputRef=useRef("");
const idRef=useRef(0);

const handleClick=()=>{
    ++idRef.current;    
    setList([...list,{id:idRef.current,text:inputRef.current.value,completed:false}])
    
}

const handleCheck=(id)=>{
    const update=list.reduce((acc,curr)=>{
        curr.id===id?acc.push({...curr,completed:!curr.completed}): acc.push(curr)
        return acc ;
    },[])

    setList(update);
}

const handleDelete=(id)=>{
    const filter=list.filter(item=>item.id!==id)
    setList(filter);
}

    return <div>
        <h1>To Do List</h1>
        <div className="input">
            <input type="text" placeholder="Enter Todo" ref={inputRef} />
            <button onClick={handleClick}>Add</button>
        </div>
        <div className="output">
            <ul>
                {list&&list.map(item=><li key={item.id}><div><input type="checkbox" checked={item.completed} onChange={()=>handleCheck(item.id)}/> <span style={item.completed?{textDecoration:"line-through"}:{textDecoration:"none"}}>{item.text}</span> <button onClick={()=>handleDelete(item.id)}>delete</button></div></li>)}
            </ul>
        </div>
    </div>
}

export default ToDo