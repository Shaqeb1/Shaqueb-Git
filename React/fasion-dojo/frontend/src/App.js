import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';



function App() {
  return (
    <>
      <Header/>
      <main>
        <HomeScreen/>
      </main> 
      <Footer/>
    </>
  );
}

export default App;
