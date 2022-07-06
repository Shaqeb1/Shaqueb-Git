import Home from "./pages/Home/Home";
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Men from './pages/Men/Men'

const  App = ()=>  {
  return (
   <Routes>
    <Route path="/" element={<Navbar/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/men" element={<Men/>}/>
    </Route>
   </Routes>
  );
}

export default App;
