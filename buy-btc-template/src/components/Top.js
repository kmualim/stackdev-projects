import styled from 'styled-components';
import React from 'react';

const Nav = styled.nav`
    display:flex;
    flex-flow:row nowrap;
    justify content: space-between;
    color: #FFFFFF;

    p{
        padding-left: 50px;
    }
    a{
        padding-left: 1050px;
        padding-top: 15px;
        text-decoration: none;
    }
`

export default() =>(
    <Nav>
        <p>Changelly</p>
        <a href="#">Sign in</a>
    </Nav>
)