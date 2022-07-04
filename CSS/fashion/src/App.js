import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home.jsx'
import Men from './Pages/Men/Men';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='men' element={<Men/>}/>
      </Route>
    </Routes>
  );
}

export default App;
