import React from 'react';
import { Container, Row, Col,Form, FormGroup, Label, Input, FormText,
        Table, Button
} from 'reactstrap';
import avatar from '../../assets/avatar.png';
import avatar2 from '../../assets/avatar2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class EditProfile extends React.Component {


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
            <Row className="m-5 d-flex justify-content-center">
                <Col-6>
                <FormGroup check>
                    <img src={avatar} alt={"avatar"} className="avatar mx-auto" /> 
                    <Label check>
                    <Input  className="text-center" type="radio" name="radio1" />{' '} 
                    </Label>
                </FormGroup>
                </Col-6> 
                <Col-6>
                <FormGroup check>
                     <img src={avatar2} alt={"avatar2"} className="avatar mx-auto" /> 
                    <Label check>
                    <Input  className="text-center" type="radio" name="radio1" />{' '}
                    </Label>
                </FormGroup>
                 </Col-6>
                <hr/> 
            </Row>
            <Row className="m-3">
                <Col> 
                    <Form>
                   
                    <FormGroup>
                    <Label for="name">Име и Фамилия  </Label>
                    <Input type="name" name="name" id="name" className="input-lg" placeholder="Име " />
                    </FormGroup>
                    
                    <FormGroup>
                    <Label for="name">Длъжност  </Label>
                    <Input type="textarea" name="text" id="exampleText" />
                    
                    </FormGroup>
                
                    
                    <Button className="align-right" color="warning">Запази </Button>
                </Form>
                </Col>
            </Row> 
            

        </Container>
      </div>
    );
  }
}