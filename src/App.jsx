import './App.css'
import Body from './components/Body'
import video1 from './assets/vid1.mp4'
import video2 from './assets/vid2.mp4'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <BrowserRouter>
    <div id='appbackground'>
      <video autoPlay loop muted id='video11'>
        <source src={video2} type='video/mp4' id='video1'/>
      </video>
    </div>

    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
