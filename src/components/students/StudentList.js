import React from 'react';
import { Container, Row, Col, Form, 
        Table, Button, Card,  CardTitle, CardText } from 'reactstrap';
import avatar from '../../assets/avatar.png';



export default class StudentList extends React.Component {
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
               <h1> Списък ученици   </h1>
               <hr/> 
            
            </Row>
            <Row className="m-5">
                <Table className="text-center">
                        <thead>
                        <tr >
                            <th>Номер</th>
                            <th>Име </th>
                            <th>Фамилия </th>
                            <th>Опции</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Георги </td>
                            <td>Георгиев </td>
                            <td>
                                <Button color="warning">
                                    Справка 
                                </Button>
                            </td>
                           
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Георги </td>
                            <td>Георгиев </td>
                            <td>
                                <Button color="warning">
                                    Справка 
                                </Button>
                            </td>
                            
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Георги </td>
                            <td>Георгиев </td>
                            <td>
                                <Button color="warning">
                                    Справка 
                                </Button>
                            </td>
                           
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Георги </td>
                            <td>Георгиев </td>
                            <td>
                                <Button color="warning">
                                    Справка 
                                </Button>
                            </td>
                           
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Георги </td>
                            <td>Георгиев </td>
                            <td>
                                <Button color="warning">
                                    Справка 
                                </Button>
                            </td>
                           
                        </tr>
                        <tr>
                           <th scope="row">1</th>
                            <td>Георги </td>
                            <td>Георгиев </td>
                            <td>
                                <Button color="warning">
                                    Справка 
                                </Button>
                            </td>
                           
                        </tr>
                        </tbody>
                    </Table>
            </Row> 
        </Container>
      </div>
    );
  }
}