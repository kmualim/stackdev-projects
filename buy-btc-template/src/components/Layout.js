import styled from 'styled-components';

const Layout = styled.div`
    display: flex; 
    flex-flow: column nowrap;
    flex-grow: 1;
    flex-shrink:1;
    flex-basis:auto;
    margin: 0;
    padding-left: 100px;
    & *{
        color:white;
    }
`
export default Layout;