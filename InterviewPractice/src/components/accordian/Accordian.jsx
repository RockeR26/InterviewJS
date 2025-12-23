import React, { useState } from 'react'
import { items } from '../../assets/utilities'

const Accordian = () => {
  const[selectedIndex,setSelectedIndex]=useState(null)
  const handleClick=(index)=>{
    if(index===selectedIndex) setSelectedIndex(null)
    else setSelectedIndex(index)
  }

return <div>
  <h1>Accordian</h1>
    {items&&items.map((item,index)=><div style={{margin:"10px"}} key={index} >
      <div style={{border:"2px solid white", width:"50%",padding:"1% 5%",display:"flex", justifyContent:"space-between", cursor:"pointer"}} onClick={()=>handleClick(index)} >
        <h4 style={{margin:"0"}}>{item.title}</h4><span style={{marginTop:"0"}}>🔻</span>
      </div>
        {index===selectedIndex&&<p style={{border:"2px solid white", borderTop:"0", width:"50%", margin:0 ,padding:"1% 5%"}}>{item.content}</p>}
    </div>)}
</div>
}
export default Accordian