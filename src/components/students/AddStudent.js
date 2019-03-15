import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText,
        Table, Button, Card,  CardTitle, CardText } from 'reactstrap';
import avatar from '../../assets/avatar.png';



export default class AddStudent extends React.Component {
  constructor(props) {
    super(props);

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
            <Row className="m-5">
               <h1> Ученик   </h1>
               <hr/> 
            
            </Row>
            <Row className="m-5">
             <Col> 
              <Form>
                <Col>
                  <Row>
                    <Col> 
                       <FormGroup>
                            <Input type="name" name="number" id="name" placeholder="Номер  " /> 
                    </FormGroup>
                    </Col>  
                    <Col> 
                       <FormGroup>       
                         <Input type="checkbox" />{' '}
                                пореден 
                    </FormGroup>
                    </Col> 
                  </Row> 
                </Col>
                <Col>
                 
                    <FormGroup>
                    <Label for="name">Име </Label>
                    <Input type="name" name="fname" id="name" placeholder="Име " />
                    </FormGroup>
                    <FormGroup>
                    <Label for="name">Фамилия </Label>
                    <Input type="name" name="lname" id="name" placeholder="Фамилия " />
                    </FormGroup>
                    <FormGroup>
                    <Label for="name">ЕГН </Label>
                    <Input type="name" name="name" id="name" placeholder="Име " />
                    </FormGroup>  
                    <Button className="align-right" color="warning">Добави </Button>
               
                </Col>
                 </Form>
             </Col>
            </Row> 
        </Container>
      </div>
    );
  }
}