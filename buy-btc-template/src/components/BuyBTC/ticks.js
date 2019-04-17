import React, {Component} from 'react'
import styled from 'styled-components'

const Constraint=styled.div`
    margin: 12px;
    margin-bottom:40px;
    display: flex;
    justify-content: space-between;
`
const Ticks = styled.div`
    positions:relative;
    color: #9A9A9A;
    font-size:9px;
    font-weight: 400; 
    line-height: 11px;
    letter-spacing:0.02em;
    text-align: center;
    &&:before{
        position: absolute;
        content: " ";
        width: 1px; 
        height: 6px;
    }
`
export default class Ticker extends Component{

    render(){
        var marks = [0.01, 0.15, 0.25, 0.35, 0.45, 0.60, 0.80, 0.93, 1.00, 1.15, 1.15];
        return(
            <Constraint>
                 {marks.map(mark => (
                    <Ticks>{mark.toFixed(2)}</Ticks>))}
            </Constraint>
        )
    };
}
