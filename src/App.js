import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Game from './components/Game';
import Footer from './components/Footer';


function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Game/>
      <Footer/>
      </div>
  );
}

export default App;
