import React from 'react';
import styled from 'styled-components';
import button from './button';
import info from './info';

const Grid=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width:100%;
    background: #FFFFFF;
`
const GridItem = styled.div`
    border: 2px solid #F6F9FC; 
    
`
const Gridtext = styled.div`
    padding-left: 80px; 
    padding-right: 50px;
    width: 50%;
    margin: 70px; 
    h1 { # description for header
        font-size: 15px; 
        line-height: 20px; 
        letter-spacing: 0.1em;
        font-weight: 600;
        color: #24B47E;
    }
    p {  # description for paragraph
        font-size: 17px;
        line-height: 20px; 
        letter-spacing: 0.1em;
        font-weight: 400;
        color: #6B7C93;
    }

    a {
        font-size: 17px;
        line-height: 22px; 
        letter-spacing: 0.05em;
        font-weight: 400;
        color: #24B47E;
        text-decoration: none;
    }
`

export default () => (
        <Grid>
            {info.map(feature => {
                let featureI = button[feature.icon];
                return(
                    <GridItem>
                        <Gridtext>
                        <featureI/>
                            <h1>{feature.name}</h1>
                            <p>{feature.content}</p>
                            <a href="#">Learn More!</a>
                        </Gridtext>
                </GridItem>
                )
        })}
        </Grid>
)
 
