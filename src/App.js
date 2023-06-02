import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Player from './components/Players';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <Player/> */}
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
