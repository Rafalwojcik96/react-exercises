// W lvl 2 zostały dodane przyciski za pomocą props

class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result
  }

  handleMathClick=(type, number = 1) => {

   if(type === "subtraction") {
     this.setState(prevState =>({
       count: prevState.count + 1,
       result: prevState.result - number
     }))
   }
    else if (type === "reset"){
     this.setState(prevState =>(
       {
        count: prevState.count + 1,
        result: 0
       }))
   } 
   else if (type === "addition"){
    this.setState(prevState =>({
      count: prevState.count + 1,
      result: prevState.result + number
   }))
  }
}

  render() {
  return (
    <>
    <MathButton 
      name="-1" 
      number="1" 
      type="subtraction" 
      click={this.handleMathClick}
    />
    <MathButton 
      name="reset" 
      type="reset" 
      click={this.handleMathClick}
    />
    <MathButton 
      name="1" 
      number="1" 
      type="addition" 
      click={this.handleMathClick}
    />
    <h1>Liczba kliknięć: {this.state.count} </h1>
    <h1>Wynik: {this.state.result}</h1>
    </>
   )
  }
}

const MathButton = (props) => {
  const number = parseInt(props.number)
  return (
  <button onClick={() => props.click(props.type, number)}>{props.name}</button>
  )
  }

ReactDOM.render(<Counter result={10} />, document.getElementById("root"))