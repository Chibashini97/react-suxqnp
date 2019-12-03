import React,{Component} from 'react';
import { render } from 'react-dom';
import {Tabs} from 'react-bootstrap'
class MainPage extends Component{
  render(){
    return(
      <div>
      <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Sonnet />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Sonnet />
  </Tab>
</Tabs>
      </div>
    )
  }
}
export default MainPage