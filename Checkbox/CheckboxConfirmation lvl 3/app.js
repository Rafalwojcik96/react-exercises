const ValidationMessage = (props) => <p>{props.txt}</p>

const displayMessage = (isFormSubmitted, isConfirmed) => {
  if (isFormSubmitted) {
    if (isConfirmed) {
      return <ValidationMessage txt="Ok, możesz iść dalej."/>
    }
    else {
      return <ValidationMessage txt="Niestety, nie przejdziesz."/>
    }
  } else {return null}
}

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

  // displayMessage = () => {
  //   if (this.state.isFormSubmitted) {
  //     if (this.state.isConfirmed) {
  //       return <ValidationMessage txt="Ok, możesz iść dalej."/>
  //     }
  //     else {
  //       return <ValidationMessage txt="Niestety, nie przejdziesz."/>
  //     }
  //   } else {return null}
  // }

  render() {
    const {isConfirmed, isFormSubmitted} = this.state
    console.log(isConfirmed)

    return (
      <>
      <h1>Potwierdz checkbox aby przejść dalej.</h1>
      <form onSubmit={this.handleFormSubmit}>
      <input type="checkbox" id="age" 
      onChange={this.handleCheckboxChange}
      checked={isConfirmed}/>
      <label htmlFor="age">Potwierdzam checkbox!</label>
      <br/>
      <button type="submit"> Przechodzę!</button>
      </form>
      {displayMessage(isFormSubmitted, isConfirmed)}
      </>
    )
  }
}

ReactDOM.render(<CheckboxConfirmation/>, document.getElementById(`root`))