const ValidationMessage = (props) => <p>{props.txt}</p>

const CheckingForm = (props) => (
  <form onSubmit={props.submit}>
    <input type="checkbox" id="age" 
      onChange={props.change}
      checked={props.isConfirmed}/>
    <label htmlFor="age">Potwierdzam checkbox!</label>
    <br/>
    <button type="submit"> Przechodzę!</button>
  </form>
)

class CheckboxConfirmation extends React.Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if(!this.state.isFormSubmitted){
      this.setState({
        isFormSubmitted: true
      })
    }
  }

  displayMessage = (isFormSubmitted, isConfirmed) => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Ok, możesz iść dalej."/>
      }
      else {
        return <ValidationMessage txt="Niestety, nie przejdziesz."/>
      }
    } else {return null}
  }

  render() {
    const {isConfirmed, isFormSubmitted} = this.state
    console.log(isConfirmed)

    return (
      <>
      <h1>Potwierdz checkbox aby przejść dalej.</h1>
      <CheckingForm 
        change={this.handleCheckboxChange} 
        submit={this.handleFormSubmit} 
        checked={isConfirmed}
      />
      {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<CheckboxConfirmation/>, document.getElementById(`root`))