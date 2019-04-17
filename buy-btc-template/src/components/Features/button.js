import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
    width: 65px; 
    height: 65px; 
    background: #B9F4BC;
    border-radius: 50%;    
    display: flex; 
    align-items: center;
`
const Question = () => (
    <Circle>
        
    </Circle>
);

const Cycle = () => (
    <Circle>

    </Circle>
);

const Clock = () => (
    <Circle>

    </Circle>
);

const Dollar = () => (
    <Circle>

    </Circle>
);

export default {
    "dollar": Dollar,
    "question": Question,
    "cycle": Cycle, 
    "clock": Clock
}