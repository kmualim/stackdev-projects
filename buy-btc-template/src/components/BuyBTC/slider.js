import React, {Component} from 'react'
import styled from 'styled-components'

const Input = styled.input`
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    height: 15px; /* Specified height */
    border-radius: 6.5px; 
    margin: 0 auto;
    width: 100%; /* same width as tickers */ 
    background: #E1E1E1; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;

  
    &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    border-radius: 50%; 
    background: #71D07D; /* Green background */
    #shadow: 0px 2px 4px rgba(100,100,100,0.5);
    cursor: pointer; /* Cursor on hover */
    }
  
  &::-moz-range-thumb {
        -webkit-appearance:none;
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        border-radius: 50%; 
        background: #71D07D; /* Green background */
        cursor: pointer; /* Cursor on hover */
  }
  `

  export default class Slider extends Component{
      constructor(props){
          super(props);
          this.state={
              value:2,
              min:0,
              max:10
          }
          this.handleChange=this.handleChange.bind(this);
      }
      handleChange(e){
        this.setState({value:e.target.value});
      }

      render(){
          return(
            <Input type="range" {...this.state}
            onChange={this.handleChange}/>
          )
      };
  }