import React, {Component} from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Selectbox from './Selectbox'
import Slider from './slider'
import Ticker from './ticks'


const BoundingArea=styled.div`
    display:grid; 
    grid-template-columns: 1.8fr 0.6fr;
    grid-template-areas: "box-content padding";
`

const Dot=styled.div`
    width =  "5px"; 
    height = "5px"; 
    background:  "#D1D1D1"; 
    margin: "5px 0px"; 
    border-radius: 50%;
`
const Doton=styled.div`
    width =  "7px"; 
    height = "7px"; 
    background:  "#73D07D"; 
    margin: "5px 4px"; 
    border-radius: 50%;
`

const Dotbox=styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin-right: 18px;
`
const DotConstraint = styled.div`
    display: flex;
    align-items: center;
`
/* bounding white box */
const Gridarea = styled.div`
  width: 100%;
  background: white;
  grid-area: box-content; 
  justify-self: flex-end;
  border-radius: 4px;
  padding: 44px 0;

`;
/* places contents within a constraint field */
const Constraint = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 10px;
  color: #9B9B9B;
  padding-bottom: 10px;
`
export default class BuyBTC extends Component{
    constructor(props){
        super(props);
        this.state={
            rates:[],
            value:0,
            current: "US",
            amount:200,
            options: ['USD', 'SGD', 'EUR'],
            countries: [
                {value: "USD", id: "US", imgURL: "https://www.countryflags.io/us/flat/64.png"},
                {value: "EUR", id: "EU", imgURL: "https://www.countryflags.io/eu/flat/64.png"},
                {value: "SGD", id: "SG", imgURL: "https://www.countryflags.io/sg/flat/64.png"}
            ], 
            crypto:[
                {value: "BTC", id: "BTC", imgURL:"https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"}
            ]
        }
    
        this.changeBaseCurrency = this.changeBaseCurrency.bind(this);
        this.getConvertedCurrency = this.getConvertedCurrency.bind(this);
        this.callAPI = this.callAPI.bind(this);
    }
    
    changeBaseCurrency(e) {
        this.setState({current: e.target.value});
        this.callAPI(e.target.value)
    }

    getConvertedCurrency(amount,crypto,rates) {
        return Number.parseFloat(amount * rates[crypto]).toFixed(3);
    }

    componentDidMount() {
        this.callAPI(this.state.current)
       }  

    callAPI(base) {
    const api = `https://api.exchangeratesapi.io/latest?base=${base}`;
        
        fetch(api)
        .then(results => {
            return results.json();
        }).then(data => this.setState({
        rates: data['rates'],
        }));
    } 

    render(){
        const {amount, current, countries, crypto} = this.state;
        return(
        <BoundingArea>
        <Gridarea>
        <Constraint>
            <Slider/>
            <Ticker/>
            <Selectbox amount={amount} items={countries} selected={current} />
            <DotConstraint>
            <Dotbox>
                <Dot/>
                <Doton/>
                <Dot/>
            </Dotbox>
            <p style={{color: "#9B9B9B", fontWeight: "600"}}>For <span style={{ color: "black" }}>{this.state.amount} {this.state.current}</span> you will get <span style={{ color: "black" }}>0.7474 Bitcoin</span></p>
            </DotConstraint>
            <Selectbox amount={0.7474} items={crypto} selected={crypto[0].id}/>
            <Button theme={{background:"#99D979", main: "#FFFFFF" }} width="100%" style={{marginTop:"23px"}}>Continue</Button>
        </Constraint>
        </Gridarea>
        </BoundingArea>
            )
    }
}