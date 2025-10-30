import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [list,setList]=useState([]);
useEffect(()=>{
  fetchData();
},[])

const fetchData=async()=>{
  const res=await fetch('https://dummyjson.com/products');
  const data= await res.json();
  setList(data.products);
}

const handleClick=()=>{
  const top5=list.sort((a,b)=>b.rating-a.rating).slice(0,5)
  const filterd=list.filter((item)=>top5.includes(item));
  setList(filterd);
}

if(list.length===0){
  return <h3>Loading..</h3>
}

  return (
    <>
    <h1>List of Procducts</h1>
    <button onClick={handleClick}>Top 5 Products</button>
    <div className='conatiner'>
        {list.map((item)=>(<div key={item.id} className='prod-card'>
          <h3>{item.title}</h3>
          <h5>{item.price}</h5>
          <h5>{item.rating}</h5>
          <h5>{item.category}</h5>
        </div>))}
    </div>
    </>
  )
}

export default App
