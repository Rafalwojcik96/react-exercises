const PositiveMessage = () => <p>Ok, możesz iść dalej.</p>;
const NegativeMessage = () => <p>Niestety, nie przejdziesz.</p>

class CheckboxAgeConfirmation extends React.Component {

  state = {
    isConfirmed: false,
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed
    })
  }

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage/>
    }
    else {
      return <NegativeMessage/>
    }
  }

  render() {
    console.log(this.state.isConfirmed)
    return (
      <>
      <h1>Potwierdz checkbox aby przejść dalej.</h1>
      <input type="checkbox" id="age" 
      onChange={this.handleCheckboxChange}
      checked={this.state.isConfirmed}/>
      <label htmlFor="age">Potwierdzam checkbox!</label>
      {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<CheckboxAgeConfirmation/>, document.getElementById(`root`))