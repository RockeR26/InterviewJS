import { useEffect, useState } from "react"


const Task = () => {
    const[tasks,setTasks]=useState([])
    const [title,setTitle]=useState("");
    const [type,setType]=useState("low");

    const typeList=["high","medium","low"];
    const timeList={"high":3,"medium":5,"low":7}

    useEffect(()=>{
        if(tasks.length===0){
            return;
        
        }else{
        const t=setInterval(()=>{
            const mapped=tasks.map((item)=>{
                return {
                    ...item,
                    time:item.time-1,
                }
            }).filter((item)=>item.time>0)
            setTasks(mapped);
        },1000)
        return ()=>clearInterval(t);
        }
       
    },[tasks])

    let sortFunc=typeList.reduce((acc,curr,index)=>{
                acc[curr]=index
                return acc
            },{})
        
 

    const addTask=()=>{
        const newTaskList=[...tasks,{
            title,
            type,
            time:timeList[type],
            show:true,
        }]
        const sorted=newTaskList.sort((a,b)=>sortFunc[a.type]-sortFunc[b.type])
        setTasks(sorted);
    }
    const deleteTask=(ind)=>{
        const filtered=tasks.filter((item,index)=>index!==ind)
        const sorted=filtered.sort((a,b)=>sortFunc[a.type]-sortFunc[b.type])
        setTasks(sorted);
    }

    return <div>
        <div>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <select value={type} onChange={(e)=>setType(e.target.value)}>
                    {typeList.map((item,index)=><option value={item} key={item+index}>{item}</option>)}
            </select>
            <button onClick={addTask}>Add</button>
        </div>
        <div>
            <ul>
                {tasks.map((item,index)=><li key={item.title+index}>{index+1}. {item.title} | {item.type} | {item.time+"s"} | <button onClick={()=>deleteTask(index)}>delete</button> </li>)}
            </ul>
            
        </div>
    </div>
}

export default Task