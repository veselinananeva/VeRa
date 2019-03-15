import React from 'react';
import { Container, Row, Col, Form, 
        Table, Button, Card,  CardTitle, CardText } from 'reactstrap';
import avatar from '../../assets/avatar.png';



export default class TestList extends React.Component {
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
               <h1> Списък тестове   </h1>
               <hr/> 
            
            </Row>
            <Row className="m-5">
                <Table className="text-center">
                        <thead>
                        <tr >
                            <th>Номер</th>
                            <th>Дата на добавяне </th>
                            
                            <th>Опции</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>10.03.2019</td>
                          
                            <td>
                                <Button color="warning">
                                   Насрочи  
                                </Button>
                            </td>
                           
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>12.03.2019</td>
                          
                            <td>
                                <Button color="warning">
                                   Насрочи  
                                </Button>
                            </td>
                           
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>13.03.2019</td>
                          
                            <td>
                                <Button color="warning">
                                   Насрочи  
                                </Button>
                            </td>
                           
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>14.03.2019</td>
                          
                            <td>
                                <Button color="warning">
                                   Насрочи  
                                </Button>
                            </td>
                           
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>15.03.2019</td>
                          
                            <td>
                                <Button color="warning">
                                   Насрочи  
                                </Button>
                            </td>
                           
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>16.03.2019</td>
                          
                            <td>
                                <Button color="warning">
                                   Насрочи  
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