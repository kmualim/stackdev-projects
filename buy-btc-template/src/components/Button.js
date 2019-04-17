import styled from 'styled-components';

const Button = styled.button`
    padding: 10px 13px;
    background-color: ${props => props.theme.background};
    box-shadow: 0px 2px 4px rgba(100,100,100,0.5);
    border:none;
    border-radius: 4px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.04em;
    color: ${props => props.theme.main};
    font-weight: 600px;
    width: ${props => props.width}; 
`

Button.defaultProps={
    theme:{
        main: "#3DC281",
        background: "white"
    }

}
export default Button;