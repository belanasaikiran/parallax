import React from 'react'
import NavBar from './components/NavBar'
import  "./SCSS/styles.css"
import Main from './components/Main'
import Projects from './components/Projects'

function App() {
  return (
    <div>
        <div className='main-page'>
        <NavBar />
        <Main />
      </div>

        <div className='projects'>
       <Projects />
        </div>


    </div>
  )
}

export default App