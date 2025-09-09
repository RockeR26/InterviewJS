import  { useState, useEffect } from 'react';

const mockApiUrl = 'https://jsonplaceholder.typicode.com/comments';

const PaginatedTable = () => {
  const [data, setData] = useState([]);
  const [original,setOriginal]=useState([]);
  const [totalPages,setTotalpages]=useState(0)
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize=35;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (page) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${mockApiUrl}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setTotalpages(Math.ceil(jsonData.length/pageSize)-1)
      setOriginal(jsonData);
      setData(jsonData.filter((item,index)=> index<pageSize));
      setIsLoading(false);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  }


  const handleFirstPage = () => {
    setCurrentPage(0);
    setData(original.filter((item,index)=> index<pageSize)); 
  }

  const handlePreviousPage = () => {
    setCurrentPage(prev=>prev-1)
     setData(original.filter((item,index)=>(index>=(currentPage-1)*pageSize)&&index<pageSize*(currentPage)))
    console.log(currentPage);
    
  };

  const handleNextPage = () => {
    
     setCurrentPage(prev => prev + 1);
     setData(original.filter((item,index)=>(index>=(currentPage+1)*pageSize)&&index<pageSize*(currentPage+2)))
    };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
    setData(original.filter((item,index)=>(index>=(totalPages)*pageSize)&&index< original.length))
  }

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages;

  return (
 
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author Email</th>
          </tr>
        </thead>
        <tbody>
          {data&&data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={handleFirstPage}
          disabled={isFirstPage || isLoading}
          className="first-page-btn"
        >
          First
        </button>
        <button
          onClick={handlePreviousPage}
          disabled={isFirstPage || isLoading}
          className="previous-page-btn"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={isLastPage || isLoading}
          className="next-page-btn"
        >
          Next
        </button>
        <button
          onClick={handleLastPage}
          disabled={isLastPage || isLoading}
          className="last-page-btn"
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default PaginatedTable;