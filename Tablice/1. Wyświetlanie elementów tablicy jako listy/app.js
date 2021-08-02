class ListItems extends React.Component {
  state = {
    items: ["jablko", "śliwka", "gruszka"]
  }

  render () {
    return (
      <ul>
        {this.state.items.map(item => <li kay={item}>{`owoc ${item}`}</li>)}
      </ul>
    )
  }
}

ReactDOM.render(<ListItems />, document.getElementById('root'))