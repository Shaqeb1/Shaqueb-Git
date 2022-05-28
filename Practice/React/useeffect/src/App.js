import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    document.title = `New Messages(${value})`
  })

  return (
   <div className='container'>
     <div className='row justify-content-center align-items-center text-center shadow-sm p-3 mb-5 bg-body rounded'><h1 className='heading-primary'>{value}</h1>
     <button className='btn btn-primary sm' onClick={() => setValue(value + 1)}>Click Me</button>
     </div>
   </div>
  )
}

export default App;
