import React, {Component} from 'react';

import Nav from './components/Nav';
import Top from './components/Top';
import Layout from './components/Layout';
import Container from './components/Container';
import Alert from './components/Alert';
import Button from './components/Button';
import BuyBTC from './components/BuyBTC';
import Footer from './components/Footer';
import Features from './components/Features';
import Testimonials from './components/Testimonials';

class App extends Component{
  render(){
    return(
      <>
      <Nav>
        <Layout>
        <Top/>
        <Container>
          <div className="notif">
          <Alert>Catch mouse and gave it as present chew the plant but scratch</Alert>
          <div className="content">
          <h1 class="title">Buy Bitcoin with Credit Card</h1>
          <p class="content">Catch mouse and gave it as a present chew the plant but scratch
                me there, elevator butt. Always ensure to lay down in <br/>
                such a manner that tail can lightly brush.
          </p>
          </div>
          <Button>CREATE ACCOUNT</Button>
          </div>
          <BuyBTC/>
          </Container>
        </Layout>
        <Features/>
        <Testimonials/>
        <Footer/>
      </Nav>
      </>
    );
  }
}

export default App;
