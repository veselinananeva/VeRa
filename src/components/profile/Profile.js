import React from 'react';
import { Container, Row, Col,
        Table, Button
} from 'reactstrap';
import avatar from '../../assets/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Profile extends React.Component {
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
                <Col>
                    <img src={avatar} alt={"avatar"} className="avatar mx-auto" /> 
                 </Col>
                <Col> 
                    <h1> Мария Иванова </h1>
                    <h5> старши учител по информационни технологии и информатика </h5>
                    <hr/>
                    <Button color="secondary">Редактирай</Button>
                </Col>
                <hr/> 
            </Row>
            <Row className="m-3"> 
                <Col >
                    <Row><Col> <h2 className="text-center"> Програма за: <span className="span-text"> 20.03.2019г. </span> </h2>  </Col>  </Row> 
                    <Table className="text-center">
                        <thead>
                        <tr >
                            <th>Час</th>
                            <th>Предмет</th>
                            <th>Опции</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>-</td>
                            <td>
                                <Button color="warning">
                                
                               <FontAwesomeIcon icon={['fas', 'fa-eye']} /> 
                                    Справка 
                                </Button>
                            </td>
                           
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>информатика</td>
                            <td>
                            <Button color="warning">
                                
                                Справка 
                             </Button>
                            </td>
                            
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>-</td>
                            <td>
                            <Button color="warning">
                                
                                     Справка 
                             </Button>
                            </td>
                           
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>информатика</td>
                            <td>
                            <Button color="warning">
                                
                                Справка 
                            </Button>
                            </td>
                           
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>информатика</td>
                            <td>
                            <Button color="warning">
                                
                                Справка 
                            </Button>
                            </td>
                           
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>информатика</td>
                            <td>
                            <Button color="warning">
                                
                                Справка 
                            </Button>
                            </td>
                           
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

        </Container>
      </div>
    );
  }
}