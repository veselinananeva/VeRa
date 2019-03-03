import React from 'react';
import { Container, Row, Col,
        Card, CardImg, CardText, CardBody,
        CardTitle, CardSubtitle, Button
} from 'reactstrap';


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
        <Container>
            <Row>
                <Col>
                    <p class="mt-3" > Предстоящи тестове  </p><hr/>
                    <Row> 
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Въведение в компютърните науки</CardTitle>
                                <CardSubtitle> 20/03/2019</CardSubtitle>
                                <CardText> За 5-7 клас </CardText>
                                <Button color="warning">Виж</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Въведение в компютърните науки</CardTitle>
                                <CardSubtitle> 20/03/2019</CardSubtitle>
                                <CardText> За 5-7 клас </CardText>
                                <Button color="warning">Виж</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    
                </Col>
                <Col>
                    <p class="mt-3" > Последни уроци   </p> <hr/>
                    <Row> 
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Въведение в компютърните науки</CardTitle>
                                <CardSubtitle> 20/03/2019</CardSubtitle>
                                <CardText> За 5-7 клас </CardText>
                                <Button color="warning" >Виж </Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Въведение в компютърните науки</CardTitle>
                                <CardSubtitle> 20/03/2019</CardSubtitle>
                                <CardText> За 5-7 клас </CardText>
                                <Button color="warning" >Виж</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
}