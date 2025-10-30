import { useState } from "react";

const useTimer = (seconds) => {

const [time,setTime]=useState(seconds);
  const timerRef=useRef(null);
    useEffect(()=>{
     return ()=>clearInterval(timerRef.current);
     
  },[])
  
  const startTimer=()=>{
    if(timerRef.current)
      clearInterval(timerRef.current)
    timerRef.current=setInterval(()=>{
      setTime(t=>t-1)
    },1000)
  }
  return {time,startTimer}
}

export default useTimer