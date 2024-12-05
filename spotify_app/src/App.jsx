import { useState } from 'react'
import './assets/spotify.css'
import Sidebar from './components/Sidebar.jsx'
import PlayControls from './components/PlayControls.jsx'
import MainSection from './components/MainSection.jsx'
 
function App() {
  return (
  <>
  <div className="main">
    <Sidebar />
    <MainSection />
  </div>
    <PlayControls />
  </> 
  )
}

export default App
