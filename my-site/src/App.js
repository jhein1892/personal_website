import logo from './logo.svg';
import './App.css';
import anime from 'animejs/lib/anime.es.js'


anime({
  targets: '.header path',
  strokeDashoffset: [anime.setDashoffset, 3],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
})

function App() {
  return (
    <div className="App">
      <div className="topSection">
      </div>
      <div className='midSection'>
      </div>
      <div className='bottomSection'>
      </div>
    </div>
  );
}

export default App;
