// Funkcja strzałkowa a deklarowanie metody. Bind
// setState - przekazanie do metody obiektu i fukncji
// Definiowanie state w konstruktorze

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }
    }


    // Zakomentowane aby pokazać przykład z constructor i super
    // state = {
    //     text: ""
    // }

    handleClick (){
        const letter = "a"
        // Uzywamy albo tej metody, albo przedstawionej niżej funkcji.
        // this.setState({
        //     text: this.state.text + letter
        // })

        this.setState(() => {
            // nie musimy pisac return jeżeli przed nawiasem {}
            // postawimy nawias ()
            // return
            return {
                text:this.state.text + letter
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleClick.bind(this)}> Dodaj "A"</button>
                <h1>{this.state.text}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />,document.getElementById("root"))