import './App.css'
import Body from './components/Body'
import video1 from './assets/vid1.mp4'
import video2 from './assets/vid2.mp4'

function App() {

  return (
    <div id='appbackground'>
      <video autoPlay loop muted id='video11'>
        <source src={video2} type='video/mp4' id='video1'/>
      </video>
      <Body />
    </div>
  )
}

export default App
