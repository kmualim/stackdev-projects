import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
    background:white;
`
const Grid=styled.div`
    width: 50%;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

`
const Title=styled.h1`
        color: #0FB786;
        letter-spacing: 0.5em;
        text-align: center;
        font-size: 12px; 
        line-height: 20px; 
        font-weight: 400;
    `
const a=styled.p`
        color: black;
        text-align: center;
        letter-spacing: 0.2em;
        font-size: 12px; 
        font-weight: 400; 
`
const Icon=styled.div`

`

export default  ()=>(
    <Container>
        <Grid>
            <Icon/>
                <Title> Trusted by 2 million users </Title>
                <a>We believe that payments is a problem rooted in code, not finance. We obsessively seek out elegant,composable abstractions that enable
                robust, scalable, flexible integrations.</a>
                
        </Grid>
    </Container>
)