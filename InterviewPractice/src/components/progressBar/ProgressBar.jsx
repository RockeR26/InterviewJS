import React, { useState, useEffect } from 'react'

const ProgressBar = ({percent}) => {
    const[animation,setAnimation]= useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setAnimation(percent)
        },100)
    },[percent])
  return (
    <div className='outer'>
        <div className='inner' role='progressBar' aria-valuenow={percent} aria-valuemax={100} aria-valuemin={0} style={{transform:`translate(${animation-100}%)`}}>
                {percent+"%"}
        </div>
    </div>
  )
}

export default ProgressBar