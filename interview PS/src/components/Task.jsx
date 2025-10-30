import { useEffect, useRef, useState } from "react";

const Task = () => {

  const [value, setValue] = useState("Low");
  const [text,setText]=useState("");
  const [display,setDisplay]=useState([])


  const formatTime=(seconds)=>{
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
  }





  const handleClick=()=>{
    setDisplay([...display,`${text} || ${value} || `])
    if(value==="Medium"){
      setTime(300)
    }else if(value==="High"){
      setTime(180)
    }else{
      setTime(420)
    }
  }

  
  return (
    <div className='conatainer'> 
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
        <div>
              <select value={value} onChange={(e)=>setValue(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
          </div>
        <div>
          <button onClick={handleClick}>Add</button>
        </div>
        {display&&display.map((task,index)=><div key={index}>
          <h5>{task + formatTime(time)+" min"}</h5>
        </div>)}
    </div>

  )
}

export default Task