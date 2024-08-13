import React from 'react'
import Marquee from './assets/Components/Marquee'
import Feature from './assets/Components/Feature'
import Socialmedia from './assets/Components/Socialmedia'
import Navbar from './assets/Components/Navbar'
import Footer from './assets/Components/Footer'

const App = () => {
  return (
    <div> 
     <Navbar/>
     <Marquee/>
     <Feature/>
     <Socialmedia/>
     <Footer/>
    </div>
  )
}

export default App