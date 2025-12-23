import React from 'react'
import ProgressBar from './ProgressBar'

const Progress = () => {
    const variety=[10,5,25,50, 90,100]
  return (
    <div>
        <h1>Progress Bar</h1>
        {variety.map(item=><ProgressBar percent={item} key={item}/>)}
    </div>
  )
}

export default Progress