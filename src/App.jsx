// import { useState } from 'react'
import Header from './components/Header';
import Landscape from './components/Landscape';
import Playground from './components/Playground';
import MoreAbout from './components/MoreAbout';
import ContactMe from './components/ContactMe.jsx';
import Footer from './components/Footer';


import './styles/App.css'

function App() {


  return (
    <>
      <Header />
      <Landscape />
      <Playground />
      <ContactMe />
      <MoreAbout />
      <Footer />
    </>
  )
}

export default App
