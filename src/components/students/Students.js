import React from 'react';
import { Container, Row, Col,
        Table, Button, Card,  CardTitle, CardText } from 'reactstrap';
import avatar from '../../assets/avatar.png';



export default class Students extends React.Component {
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
               <h1> Ученици  </h1>
              <hr/>
                <Button color="secondary" href="/addstudent"> Добави  <br/> ученик</Button>
            </Row>
            <Row className="mt-3">
                <Col sm="6">
                    <Card body className="text-center">
                    <CardTitle>  Випуск <span className="span-text">2016</span> клас</CardTitle>
                    <CardText> Паралелка с усилено изучаване на информатика  </CardText>
                    <Button color="warning" href="/studentlist">Виж ученици</Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body className="text-center">
                    <CardTitle> Випуск <span className="span-text"> 2017 </span> клас </CardTitle>
                    <CardText> Паралелка с усилено изучаване на дизайн </CardText>
                    <Button color="warning" href="/studentlist" >Виж ученици</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm="6">
                    <Card body className="text-center">
                    <CardTitle> Випуск <span className="span-text"> 2018</span> клас</CardTitle>
                    <CardText> Паралелка с усилено изучаване на информатика  </CardText>
                    <Button color="warning" href="/studentlist" >Виж ученици</Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body className="text-center">
                    <CardTitle>Випуск <span className="span-text"> 2019</span> клас </CardTitle>
                    <CardText> Паралелка с усилено изучаване на дизайн </CardText>
                    <Button color="warning" href="/studentlist" >Виж ученици</Button>
                    </Card>
                </Col>
            </Row>


        </Container>
      </div>
    );
  }
}