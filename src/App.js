import React from 'react'
import NavBar from './components/NavBar'
import  "./SCSS/styles.css"
import Main from './components/Main'
import Projects from './components/Projects'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function App() {
  return (
    <Parallax pages={4} style={{top: '0', left: '0'}}>

    <div>
        {/* <div className='main-page'> */}
        <NavBar />
        <Main />
      {/* </div> */}

        {/* <div className='projects'> */}
       <Projects />
        {/* </div> */}


    </div>
    </Parallax>

  )
}

export default App