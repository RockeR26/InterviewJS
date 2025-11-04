import React, { useState } from 'react'

const Chips = () => {
    const [text,setText]=useState("");
    const [list,SetList]=useState([]);
  
    const handleKeyDown=(e)=>{
        if(e.key==="Enter"&&text.trim()!==""){
            SetList([...list,{
                id:list.length,
                text:text
            }]);
            setText("");
        }
        
    }

    const handleCross=(id)=>{
        SetList(list.filter((item)=>item.id!==id))
    }
  
    return (
        <div className='main-container'>
        <h2>Chips Input</h2>
        <input
            type="text" 
            placeholder="Type a chip and press tag"
            className="input"
            value={text}
            onChange={e=>setText(e.target.value)}
            onKeyDown={e=>handleKeyDown(e)}
        />
         {list&& <p>{list.map((item)=><span key={item.id} style={{backgroundColor:"gray", margin:"2px",padding:"2px"}}>{item.text} <button onClick={()=>handleCross(item.id)}> X</button></span>)}</p>} 
        </div>
  );
}


export default Chips