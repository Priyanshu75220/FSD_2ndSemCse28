import React, { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const containerStyle = {
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial"
  }

  const cardStyle = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    width: "350px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.4)"
  }

  const countStyle = {
    fontSize: "60px",
    color: "#203a43",
    margin: "20px 0"
  }

  const buttonStyle = {
    backgroundColor: "#203a43",
    color: "white",
    border: "none",
    padding: "12px 20px",
    margin: "10px",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.3s"
  }

  return (
    <div style={containerStyle}>

      <div style={cardStyle}>

        <h1 style={{color:"#203a43"}}>
          Counter App
        </h1>

        <h2 style={countStyle}>
          {count}
        </h2>

        <button
          style={buttonStyle}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          style={buttonStyle}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <button
          style={buttonStyle}
          onClick={() => setCount(0)}
        >
          Reset
        </button>

      </div>

    </div>
  )
}

export default App