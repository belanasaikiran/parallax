import React from 'react'
import  "../SCSS/styles.css"


function NavBar() {
  return (
    <div>

      {/* rounded navbar */}


      <nav class="navbar">
     
            {/* plane css navbar */}
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Saikiran Belana</a>
                <ul id="nav-mobile" class="">
                    <li><a href="sass.html">Projects</a></li>
                    <li><a href="badges.html">Skills</a></li>
                    <li><a href="collapsible.html">Contact</a></li>
                </ul>
            </div>



   </nav>



    </div>
  )
}

export default NavBar