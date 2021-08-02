const Item = (props) => <li>{`owoc ${props.content}`}</li>

class ListItems extends React.Component {
  state = {
    items: ["jablko", "śliwka", "gruszka"]
  }

  render () {
    const Items = this.state.items.map(item => <Item kay={item} content={item} />)
    return (
      <ul>
        {Items}
      </ul>
    )
  }
}

ReactDOM.render(<ListItems />, document.getElementById('root')) 