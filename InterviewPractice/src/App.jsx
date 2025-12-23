import './App.css';
import Accordian from './components/accordian/Accordian';
// Assuming you have these components defined somewhere else
import Chips from './components/chips/Chips'; 
import Pagination from './components/pagination/Pagination';
import Progress from './components/progressBar/Progress';
import Search from './components/search/Search';
import ToDo from './components/todo/ToDo';
import { useState } from 'react';

// Define a map that links option strings to the actual component references
const componentMap = {
  ToDo: ToDo,
  Accordian: Accordian,
  Chips: Chips, 
  Progress: Progress,
  Pagination:Pagination,
  Search:Search   
};

function App() {
  // Set an initial default option
  const [selectedComponentKey, setSelectedComponentKey] = useState("ToDo");

  const handleChange = (e) => {
    // e.target.value contains the string from the <option>
    setSelectedComponentKey(e.target.value);
  };

  // Get the component reference based on the current state key
  const CurrentComponent = componentMap[selectedComponentKey] || null;

  return (
    <>
      <select value={selectedComponentKey} onChange={(e) => handleChange(e)}>
        {Object.keys(componentMap).map(e=> <option value={e} key={e}>{e}</option>)}
      </select>
      
      {/* Render the selected component here */}
      {CurrentComponent ? <CurrentComponent /> : <p>Select an option to render a component.</p>}
    </>
  );
}

export default App;
