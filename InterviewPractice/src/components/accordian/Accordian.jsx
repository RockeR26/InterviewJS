import React, { useState } from 'react'


const Accordian = ({items}) => {
  
  const [openIndex,setOpenIndex]=useState(null);
  const handleAccordian=(index)=>{

    if(index===openIndex){
      setOpenIndex(null)
    }else{
      setOpenIndex(index)
    }
  }



  return (
    <div className='container'>
    {items?(
      <div className='outside'>
          {items.map((item,index)=><div className='inside' key={index} style={{margin:"10px", border: "2px solid black"}}>
              <div onClick={()=>handleAccordian(index)} style={{backgroundColor:"gray", display:'flex', justifyContent:"center", padding:"0", cursor:"pointer"}}>
                <h4 style={{padding:"1px",margin:"0"}}>{item.title} 🔻</h4>
              </div>
              <div style={{backgroundColor:"lightgray", display:openIndex===index?"flex":"none", justifyContent:"center", padding:"0"}}>
                <p style={{padding:"1px",margin:"0"}}>{item.content}</p>
              </div>
          </div>)}
      </div>
  ):(<h1>No items available</h1>)}
    </div>
  )
}

export default Accordian