import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input,FormText,
        Table, Button, Card,  CardTitle, CardText } from 'reactstrap';
import avatar from '../../assets/avatar.png';



export default class AddHomework extends React.Component {
  
    constructor() {
     super();

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Container fluid>
            <Row className="m-3">
              <Col> 
                <h2> Добави домашна </h2>
              </Col>
            </Row>
           <Row> 
            <Col> 
                <Form> 
                <FormGroup>
                    <Label for="name">Име </Label>
                    <Input type="name" name="fname" id="name" placeholder="Име " />
                    </FormGroup>
                <FormGroup>
                 <Input type="textarea" name="text" id="exampleText" />  
                <Input type="file" name="file" id="exampleFile" />
                </FormGroup>
                <Button className="align-right" color="warning">Добави </Button>
                </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}