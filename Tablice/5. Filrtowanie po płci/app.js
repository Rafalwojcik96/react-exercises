const data = {
  users: [
    {id :1, age: 29, name: "Arek", gender: "mężczyzna"},
    {id :2, age: 49, name: "Marta", gender: "kobieta"},
    {id :3, age: 19, name: "Stasia", gender: "kobieta"},
    {id :4, age: 24, name: "Karol", gender: "mężczyzna"},
  ]
}
const Item = ({user}) => (
<div className="userInfo">
  <h1>Użytkownik {user.name}</h1>
  <p>Informacje o użytkowniku</p>
  <p>Wiek użytkownika: {user.age}</p>
  <p>Płeć użytkownika: {user.gender}</p>
</div>
)

class ListItems extends React.Component {
  state = {
    select: "all", 
  }

  handleUsersFilter (option){
    this.setState({
      select: option
    })
  }

  usersList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "all": 
      return users.map(user => <Item user={user} kay={user.id}/>)
      case "kobieta":
        users = users.filter(user => user.gender === "kobieta");
        return users.map(user => <Item user={user} kay={user.id}/>)
      case "mężczyzna":
        users = users.filter(user => user.gender === "mężczyzna");
        return users.map(user => <Item user={user} kay={user.id}/>)
      default: 
      return "coś nie tak"
    }
  }

  render () {
    return (
      <div>
        <button onClick={this.handleUsersFilter.bind(this, "all")}>Wszyscy</button>
        <button onClick={this.handleUsersFilter.bind(this, "kobieta")}>Kobiety</button>
        <button onClick={this.handleUsersFilter.bind(this, "mężczyzna")}>Mężczyźni</button>
        {this.usersList()}
      </div>
    )
  }
}

ReactDOM.render(<ListItems data={data}/>, document.getElementById('root')) 