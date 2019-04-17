import React from 'react'
import styled from 'styled-components'
import SelectBox from './Dropdown'

const Box = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(71,71,71,0.1);
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:black;
    margin: 0;
    padding: 10px;
`

const Money = styled.p`
    font-size:16px;
    line-height:15px;
    letter-spacing: 0.05em;
    font-weight: 600;
    color: #010101;
    margin: 0;
    &:: before{
        content:"$";
    }
`
export default ({amount, items, selected}) => (
    <Box>
        <Money>{amount}</Money>
        <SelectBox items={items} selected={selected}/>
    </Box>
);