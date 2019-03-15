import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input,
        Table, Button, Card,  CardTitle, CardText } from 'reactstrap';
import avatar from '../../assets/avatar.png';



export default class AddTest extends React.Component {
  
    constructor() {
      super();

      this.displayData = [];

      this.state = {
        showdata : this.displayData,
        postVal : ""
      }

      this.appendData = this.appendData.bind(this);
     
      this.handleChange = this.handleChange.bind(this);

    };

  appendData() {
         this.displayData.push(<div  id="display-data"><pre>{this.state.postVal}</pre></div>);
         this.setState({
            showdata : this.displayData,
            postVal : ""
         });
      }

  

 handleChange(e) {
      let getTextAreaValue = e.target.value;
      this.setState({
        postVal :getTextAreaValue
      });
}

  render() {
    return (
      <div>
        <Container fluid>
            <Row className="m-3">
              <Col> 
                <h2> Тест </h2>
              </Col>
              <Col> 
               <Button color="secondary"    >Запази </Button>
              </Col> 
            </Row>
           <Row> 
              <Col>
              <Input type="textarea" name="text" id="exampleText" value={this.state.postVal} onChange={this.handleChange} />  
            
            <Button color="warning"  onClick={this.appendData}> Добави </Button>
           

             <div className="test-display">
              
             {this.displayData}
             </div>
          
              </Col>
           </Row> 
           
        </Container>
      </div>
    );
  }
}