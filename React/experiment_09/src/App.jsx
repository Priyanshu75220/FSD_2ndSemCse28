import React, { useState } from 'react'

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [showName, setShowName] = useState("")
  const [showEmail, setShowEmail] = useState("")
  const [showPassword, setShowPassword] = useState("")

  function showData() {

    if(name === "" || email === "" || password === ""){
      alert("Please Fill All Fields")
    }
    else{

      setShowName(name)
      setShowEmail(email)
      setShowPassword(password)

      alert("Registration Successful")

      setName("")
      setEmail("")
      setPassword("")
    }
  }

  const containerStyle = {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial"
  }

  const formStyle = {
    backgroundColor: "white",
    width: "380px",
    padding: "35px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    textAlign: "center"
  }

  const inputStyle = {
    width: "90%",
    padding: "14px",
    margin: "12px 0",
    borderRadius: "12px",
    border: "1px solid #ccc",
    fontSize: "16px",
    backgroundColor: "#f1f3f6",
    color: "#333"
  }

  const buttonStyle = {
    background: "linear-gradient(to right, #667eea, #764ba2)",
    color: "white",
    border: "none",
    padding: "14px",
    borderRadius: "12px",
    fontSize: "18px",
    cursor: "pointer",
    width: "100%",
    marginTop: "15px"
  }

  return (
    <div style={containerStyle}>

      <div style={formStyle}>

        <h1 style={{color:"#5a189a"}}>
          Registration Form
        </h1>

        <input
          type="text"
          placeholder="Enter Your Name"
          style={inputStyle}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          style={buttonStyle}
          onClick={showData}
        >
          Submit
        </button>

        <div style={{marginTop:"20px", textAlign:"left"}}>

          <h3>Submitted Data</h3>

          <p><b>Name:</b> {showName}</p>
          <p><b>Email:</b> {showEmail}</p>
          <p><b>Password:</b> {showPassword}</p>

        </div>

      </div>

    </div>
  )
}

export default App