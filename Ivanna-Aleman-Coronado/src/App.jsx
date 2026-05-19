import { useState } from 'react'
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";


import './styles/globals.css'
import './App.css'

function App() {
  return (
    <>
	    <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
