const PositiveMessage = () => <p>Ok, możesz iść dalej.</p>;
const NegativeMessage = () => <p>Niestety, nie przejdziesz.</p>

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

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <PositiveMessage/>
      }
      else {
        return <NegativeMessage/>
      }
    } else {return null}
  }

  render() {
    console.log(this.state.isConfirmed)
    return (
      <>
      <h1>Potwierdz checkbox aby przejść dalej.</h1>
      <form onSubmit={this.handleFormSubmit}>
      <input type="checkbox" id="age" 
      onChange={this.handleCheckboxChange}
      checked={this.state.isConfirmed}/>
      <label htmlFor="age">Potwierdzam checkbox!</label>
      <br/>
      <button type="submit"> Przechodzę!</button>
      </form>
      {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<CheckboxConfirmation/>, document.getElementById(`root`))