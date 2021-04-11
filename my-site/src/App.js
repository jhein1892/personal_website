import logo from './logo.svg';
import './App.css';
import anime from 'animejs/lib/anime.es.js'
import TopSection from './sections/topSection'
import MidSection from './sections/midSection'
function App() {
  return (
    <div className="App">
      <TopSection/>
      <div className='midSection'>
      <MidSection/>
      </div>
      <div className='bottomSection'>
      </div>
    </div>
  );
}

export default App;
