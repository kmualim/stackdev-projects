import React, {Component} from 'react';
import styled from 'styled-components';

/* currency select box */
const SelectBox1 = styled.div`
    width: 30px;
    height: 30px;
    padding:0;
    margin:0;
    color: #E8F&FE;
    cursor: pointer;
    position: relative;
    display: inline-block;
    &::before{
        content:"";
        position: absolute;
        top: 12px;
        left: 10px;
        width:0;
        height:0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-top: 5px solid black;
        cursor: pointer;
    }
`;
const Item = styled.div`
    background-color:white;
    width: 100%;
    color: black; 
    font-weight: 500;
    font-size: 18px; 
    cursor:pointer;
    width: 100%;
    text-align: center;
    &:hover{
        background-color: #E8F7FE;
    }
`
const Container= styled.div`
    width: fit-content;
    height: fit-content;
`;
/* flag image in select box*/
const Img=styled.div`
    width: 24px; 
    height: 24px; 
    margin: 0 5px;
    background: url(${props => props.imgURL});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: color;
`;
const Textinbox = styled.div`
    display: flex;
    align-items: center; 
    background-color: #E8F7FE;
    border-radius: 4px;
    padding: 12px 5px;
    cursor: pointer;

`;
const ItemGroup = styled.div`
  display: block;
  transform: ${props => props.show ? "scaleY(1)": "scaleY(0)"};
  position: absolute;
  width: 6.4em;
  transition: transform 0.2s;
`;

const SelectedItem = styled.div`
  display: inline-block;
  background-color: #E8F7FE;
  color: black;
`

export default class SelectBox extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[], 
            showtime: false,
            selected:null
        }
    }
    componentDidMount() {
        if (this.props.items && this.props.selected) {
          let selected = this.props.items.filter(i => i.id === this.props.selected)[0];
          console.log(selected);
          this.setState({
            items: this.props.items,
            selected
          })
        }
      }
    
      handleDrop = () => {
        this.setState(prevState => ({
          showtime: !prevState.showtime
        }));
      }
    
      handleSelect = (item) => {
        this.setState({selected: item, showtime: false})
      }
    

    render(){
        const {items, showtime, selected} = this.state;
        return(
            <Container>
                <Textinbox onClick={this.handleDrop}>
                {selected && <Img img={selected.imgURL}/>}
                <SelectedItem>{selected ? selected.value : "Loading..."}</SelectedItem>
                <SelectBox1 show={showtime}/>
                </Textinbox>
                <ItemGroup show={showtime}>{items.map(item => (
                        <Item key={item.id} 
                            onClick={()=> this.handleSelect(item)}>{item.value}
                            </Item>))}
                </ItemGroup>
                
            </Container>
        );
    }
}
