const Cash = (props) => (
  <div>
    {props.title} 
    {props.cash <=0 ? "" : (props.cash / props.ratio * props.price).toFixed(2)}
  </div>
)

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "btc",
  }

  static defaultProps = {
    currencies: [
      {
        id: 0,
        name: 'zloty',
        ratio: 1,
        title: "Wartość w złotych: "
      },
      {
        id: 1,
        name: 'dollar',
        ratio: 3.68,
        title: "Wartość w dolarach: "
      },
      {
        id: 2,
        name: 'euro',
        ratio: 4.22,
        title: "Wartość w euro: "
      },
      {
        id: 3,
        name: 'pund',
        ratio: 5.22,
        title: "Wartość w funtach: "
      },
    ],
    prices: {
      btc: 150910,
      eth: 9798,
      xrp: 3.29,
    }
  }

  handleChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

  handleSelect = e => {
    this.setState({
      product: e.target.value,
      amount: "",
    })
  }

  insertSuffix(select) {
    if(select === "btc") return <em>BTC</em>
    else if(select === "eth") return <em>ETH</em>
    else if(select === "xrp") return <em>XRP</em>
    else return null
  }

  selectPrice(select) {
    const price = this.props.prices[select]
    return price

  }

  render() {
    const {amount, product} = this.state;
    const price = this.selectPrice(product);
    const calculators = this.props.currencies.map(currency => (
      <Cash 
      kay={currency.id} 
      ratio={currency.ratio} 
      title={currency.title} 
      cash={amount} 
      price={price}
      />
    ))
    return (
      <div className="app">
        <label>Wybierz produkt:
          <select value={product} onChange={this.handleSelect}> 
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
            <option value="xrp">XRP</option>
          </select>
        </label>
        <br />
        <label>
          <input 
          type="number" 
          value={this.state.amount} 
          onChange={this.handleChange}
          />
          {this.insertSuffix(this.state.product)}
        </label>
        {calculators}
      </div>
    )
  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))

