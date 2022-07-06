import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home.jsx'
import Men from './Pages/Men/Men';
import SignIn from './routes/sign-in/SignIn';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='men' element={<Men/>}/>
        <Route path='signIn' element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
