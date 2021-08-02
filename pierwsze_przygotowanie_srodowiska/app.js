const header = <h1 className="title">Witaj na stronie</h1>

const classBig= "big";

const handleClick=()=>alert("Clicked!")
const main = (
    <div>
      <h2 person="osoby" onClick={handleClick} className="red">Pierwszy artykuł</h2>
     <p><i>Lorem impsum, dolor sit amet</i></p>
    </div>
)
const text = "stopka!"
const largeText = "Teskt olbrzym"
const footer = (
    <footer>
        <p className={classBig}>{text}</p>
        {largeText}
    </footer>
) 

const app = [header, main, footer]

ReactDOM.render(app, document.getElementById("root"))