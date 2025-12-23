import React, { useEffect, useState } from 'react'

const Pagination = () => {
    const [products,setProducts]=useState([])
    const [currentPage,setCurrentPage]=useState(0)
    useEffect(()=>{
        fetchData();
    },[])
    const pageSize=16;
    
    const fetchData=async()=>{
        const res=await fetch('https://dummyjson.com/products?limit=0')
        const data= await res.json();
        setProducts(data.products);
    }
    const totalpages=Math.ceil(products.length/pageSize)
    const pagesArray=[...Array(totalpages).keys()]

    const changeCurrentPage=(page)=>{
        setCurrentPage(page);
    }
    
    const traversePage=(e)=>{
        if(e.target.id==="prev"){
            setCurrentPage(prev=>prev-1);
        }else{
            setCurrentPage(prev=>prev+1);
        }
        
    }
        
  return (
    <div>
        
        <h1>Pagination</h1>
        <div><button className='pageNo' id="prev" disabled={currentPage===0} onClick={traversePage}>◀️</button> {pagesArray&&pagesArray.map(page=><button className={`pageNo ${currentPage===page?"bg":""}`} key={page} onClick={()=>changeCurrentPage(page)} >{page}</button>)} <button className='pageNo' disabled={currentPage===totalpages-1} id="next" onClick={traversePage}>▶️</button></div>
        <div className='container'>
        {products&&products.map((item,index)=>{
            if (index>=currentPage*pageSize&&index<(currentPage+1)*pageSize)
            return <div key={item.id} className='item'>
            <h3>{item.title}</h3>
            <img src={item.images[0]} alt={item.title} />
            <h5>${item.price}</h5>
        </div>})}
        </div>
    </div>
  )
}
export default Pagination