import React from 'react'
import Navbar from './Navbar'
import Marquee from './Marquee'
import Feature from './Feature'
import Socialmedia from './Socialmedia'
import Footer from './Footer'
import BooksList from './BooksList'

const BasicPage = () => {
  return (
    <div>
        <Navbar/>
        <Marquee/>
        <BooksList/>
        <Feature/>
        <Socialmedia/>
        <Footer/>
    </div>
  )
}

export default BasicPage