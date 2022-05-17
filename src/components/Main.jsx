import React from 'react'
// importing the image from images folder
import Profile from "../images/profile.png"
import {useParallax, Parallax, ParallaxProvider} from 'react-scroll-parallax';




function Main() {


const abc = "10"
    // const parallax = useParallax();

  
  return (
    <div>
        <ParallaxProvider>
        <Parallax >
       
        <div className='main-content'>
        
        <div className='main-content-left'>
        <img src={Profile} alt="profile" className='profile-image'/>
        </div>

        {/* vertical line seperator */}
        <div className='vertical-line'></div>
        


        <div className='main-content-text'>
        <h1  > Hi, I'm <span className=''>Saikiran Belana</span> </h1>
        <h2 > Full Stack Web Developer </h2>
        </div>

        </div>
        </Parallax>
        </ParallaxProvider>





    </div>
  )
}

export default Main