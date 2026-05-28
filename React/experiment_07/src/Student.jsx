
function Student(props) {
  const cardStyle = {
    backgroundColor: "white",
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)"
  }

  const textStyle = {
    color: "#333",
    fontSize: "18px"
  }

  return (
    <div>

      <div style={cardStyle}>
        <h2 style={{color:"#243b55"}}>Name:{props.name}</h2>
        <p style={textStyle}>Course:{props.course}</p>
        <p style={textStyle}>Marks:{props.marks}</p>
      </div>
    </div>
  )
}
export default Student
