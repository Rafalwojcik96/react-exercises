class App extends React.Component {
	state = {
		items: [
			{id: 1, name: "herbata", active: false},
			{id: 2, name: "ziemniaki", active: true},
			{id: 3, name: "kasza", active: true},
			{id: 4, name: "zupa wodna", active: true},
			{id: 5, name: "wrzątek", active: true},
			{id: 6, name: "chleb", active: true},
		]
	}
	render() {
		return (
			<React.Fragment>
				<Header items={this.state.items} />
					<ListItems />		
			</React.Fragment>
		)
	}
}