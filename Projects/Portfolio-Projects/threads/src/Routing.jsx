import Home from "./pages/Home/Home";
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Men from './pages/Men/Men'
import Women from "./pages/Women/Women";
import Shoes from "./pages/Shoes/Shoes";
import Bags from './pages/Bags/Bags';
import SignIn from "./components/SignIn/SignIn";

const  Routing = ()=>  {
  return (
   <Routes>
    <Route path="/" element={<Navbar/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/women" element={<Women/>}/>
      <Route path="/shoes" element={<Shoes/>}/>
      <Route path="/Bags" element={<Bags/>}/>
      <Route path="/signIn" element={<SignIn/>}/>
    </Route>
   </Routes>
  );
}

export default Routing;
