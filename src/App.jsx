// import { useState } from 'react'
import Header from './components/Header';
import Landscape from './components/Landscape';
import Playground from './components/Playground';
import AboutMe from './components/AboutMe.jsx';
import ContactMe from './components/ContactMe.jsx';
import Footer from './components/Footer';
import './styles/App.css'

/* Ideias:
  - THINK A THEME! 
    - Brasilian culture
    - Pernambuco culture
    - carnival
    - religous
    - matrix (ok)
    - philosophy
  - The HEADER is better looking with the menu icon expandable
    - Show container when menu button is clicked
    - Smooth transition
    - full screen menu or partial?
  - Clean the LANDSCAPE
    - Links to CONTACTME and PLAYGROUND (portfolio) 
    - Entry animation on Landscape page 
  - Work transitions on PLAYGROUND
  - PROJECT
    - Use techs Icons
      - <i /> (? tech, key ?)
  - static background and on some Components 
    - background-attachment: fixed 
  - Poligons Components
    - z-index
  - Friendly color Palett
    - Dark mode?
    - Change on with "sun" or "moon" button
  - Media size
*/

function App() {


  return (
    <>
      <Header />
      <Landscape />
      <AboutMe />
      <Playground />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
