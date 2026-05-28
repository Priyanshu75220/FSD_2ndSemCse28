import React, { useState } from 'react'

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function showData() {

    if(name === "" || email === "" || password === ""){
      alert("Please Fill All Fields")
    }
    else{
      alert("Registration Successful")
    }
  }

  const containerStyle = {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif"
  }

  const formStyle = {
    backgroundColor: "white",
    width: "380px",
    padding: "35px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    textAlign: "center"
  }

  const headingStyle = {
    color: "#5a189a",
    marginBottom: "25px",
    fontSize: "32px"
  }

  const inputStyle = {
  width: "90%",
  padding: "14px",
  margin: "12px 0",
  borderRadius: "12px",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "16px",
  backgroundColor: "#f1f3f6",
  color: "blue"
}
  const buttonStyle = {
    background: "linear-gradient(to right, #667eea, #764ba2)",
    color: "white",
    border: "none",
    padding: "14px 30px",
    borderRadius: "12px",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "20px",
    width: "100%",
    fontWeight: "bold"
  }

  const textStyle = {
    color: "#444",
    textAlign: "left",
    marginLeft: "15px"
  }

  return (
    <div style={containerStyle}>

      <div style={formStyle}>

        <h1 style={headingStyle}>
          Register
        </h1>

        <input
          type="text"
          placeholder="Enter Your Name"
          style={inputStyle}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          style={inputStyle}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          style={inputStyle}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div style={textStyle}>
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Password:</b> {password}</p>
        </div>

        <button
          style={buttonStyle}
          onClick={showData}
        >
          Submit
        </button>

      </div>

    </div>
  )
}

export default App