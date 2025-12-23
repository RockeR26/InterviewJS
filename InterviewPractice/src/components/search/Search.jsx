import React, { useEffect,useState } from 'react'

const Search = () => {
const [results,setResults]=useState([]);
const [input,setInput]=useState("");
const [focus,setFocus]=useState(false)
const [cache,setCache]=useState({})
useEffect(()=>{
    if(cache[input]){
        console.log("Cache "+ input);
        setResults(cache[input])
        return;
    }
    const timer=setTimeout(() => {
        fetchData();
        console.log(cache);
        
    }, 400);
    

    return ()=>{
        clearTimeout(timer);
    }
      
},[input])
    const fetchData=async()=>{
        console.log("API Call "+input)
        const res=await fetch('https://dummyjson.com/products/search?limit=0&q='+input);
        const data=await res.json();
        setResults(data.products.sort((a,b)=>a.title.localeCompare(b.title)));
        setCache((prev)=>({...prev,[input]:data.products.sort((a,b)=>a.title.localeCompare(b.title))})); 
    }

  return (
    <>
        <h1>Search</h1>
        <div className='main'>
            <div className='search-container' >
                <input type="text"  className='search-input' onChange={(e)=>setInput(e.target.value)} value={input} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}/>
                <button className='search-button'>Search</button>
            </div>
            {focus&&<div className='result-container'>
                {results&&results.map(item=><span className='result' key={item.id}>{item.title}</span>)}
            </div>
            }
        </div>

    </>

  )
}

export default Search