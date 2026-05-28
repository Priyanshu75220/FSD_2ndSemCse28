import { useState } from 'react'
import './App.css'
import Student from "./Student"
import React from 'react'

function App(){
  const containerStyle = {
    background: "linear-gradient(to right, #141e30, #243b55)",
    minHeight: "100vh",
    padding: "30px"
  }

  const headingStyle = {
    color: "white",
    textAlign: "center"
  }
  return(
  <div style={containerStyle}>
    <h1 style={headingStyle}>Student Information</h1>
  <Student name="Raj" course="Btech" marks="90%"/>
  <Student name="Ram" course="MCA" marks="95%"/>
  <Student name="Rohan" course="M.tech" marks="85%"/>
 </div>
  )
}
export default App
