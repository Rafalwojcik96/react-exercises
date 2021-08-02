class Message extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      messageIsActive: false
    }
    this.handleMessageButton = this.handleMessageButton.bind(this)
  }

  handleMessageButton(){
    this.setState({
      messageIsActive: !this.state.messageIsActive
    })
  }

  render (){
    console.log(this.state.messageIsActive);
    const text = 'lorem ipsum'

    return(
      <React.Fragment>
        <button onClick={this.handleMessageButton}>
        {this.state.messageIsActive ? 'Ukryj' : 'Pokaż'} 
        </button>
        {this.state.messageIsActive ? <p>{text}</p>: null}
      </React.Fragment>
      // <p>{this.state.messageIsActive && text}</p> 
      // Mozna i tak ale wtedy zostaje nam pusty znacnzik p gdy tekst jest ukryty
      // Albo tak {tis.state.messageIsActive && <p>{text}</p>}
    )
  }
}

ReactDOM.render(<Message />, document.getElementById("root"))