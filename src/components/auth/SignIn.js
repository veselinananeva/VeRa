import React, { Components } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

export default class SignIn extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="login-container">
      
        <Container >
            <Row className="sign-form m-5 p-2">
                <Col>
                    <Form>
                        <FormGroup>
                        <Label for="exampleEmail"> Потребителско Име</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                        <Label for="examplePassword">Парола </Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        <Button color="warning"> Вход  </Button> 
                    </Form>
                </Col>
            </Row>

        </Container>
       
      </div>
    );
  }
}