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

  render () {
    let users = this.props.data.users
    users = users.filter((user) => user.gender === "kobieta" )
    const Items = users.map(user =><Item kay={user.id} user={user} />)
    return (
      <ul>
        {Items}
      </ul>
    )
  }
}

ReactDOM.render(<ListItems data={data}/>, document.getElementById('root')) 