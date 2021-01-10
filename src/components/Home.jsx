import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1>Welkom Frederik</h1>
                    <p>Deze applicatie biedt je de mogelijkheid om je schooladministratie volledig op orde te krijgen.
                        Via de naviagatiebalk krijg je snel toegang tot alle verschillende features van dit platform.
                    </p>
                    <p>
                        Heb je een vraag over het gebruik van het platform? Klik dan op <img src="images/help2.svg" width="30px"/> bovenaan.
                    </p>
                    <hr/>
                </Container>
            </Jumbotron>
            <Container className="home-container">
                <h3>Wat is er mogelijk?</h3>
                <CardDeck>
                    <Col md="4" lg="3" className="mt-4">
                        <Card className="h-100 text-center">
                            <div className="p-2" >
                                <Card.Img variant="top" src="images/mortarboard.svg" style={{ maxWidth: '8rem'}}/>
                            </div>
                            <Card.Header>
                                <h5>Opleidingen</h5>
                            </Card.Header>
                            <Card.Body>
                                Toevoegen van nieuwe opleidingen en beheren van bestaande opleidingen
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4" lg="3" className="mt-4">
                        <Card className="h-100 text-center">
                            <div className="p-2" >
                                <Card.Img variant="top" src="images/books.svg" style={{ maxWidth: '8rem'}}/>
                            </div>
                            <Card.Header>
                                <h5>Vakken</h5>
                            </Card.Header>
                            <Card.Body>
                                Toevoegen van nieuwe vakken en beheren van bestaande vakken
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4" lg="3" className="mt-4">
                        <Card className="h-100 text-center">
                            <div className="p-2" >
                                <Card.Img variant="top" src="images/clock.svg" style={{ maxWidth: '8rem'}}/>
                            </div>
                            <Card.Header>
                                <h5>Lesmomenten</h5>
                            </Card.Header>
                            <Card.Body>
                                Toevoegen van nieuwe lesmomenten en beheren van bestaande lesmomenten
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4" lg="3" className="mt-4">
                        <Card className="h-100 text-center">
                            <div className="p-2" >
                                <Card.Img variant="top" src="images/exam.svg" style={{ maxWidth: '8rem'}}/>
                            </div>
                            <Card.Header>
                                <h5>Resultaten</h5>
                            </Card.Header>
                            <Card.Body>
                                Toevoegen van nieuwe resultaten en beheren van bestaande resultaten voor opdrachten en examens
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4" lg="3" className="mt-4">
                        <Card className="h-100 text-center">
                            <div className="p-2" >
                                <Card.Img variant="top" src="images/teacher.svg" style={{ maxWidth: '8rem'}}/>
                            </div>
                            <Card.Header>
                                <h5>Docenten</h5>
                            </Card.Header>
                            <Card.Body>
                                Toevoegen van nieuwe docenten en beheren van bestaande docenten
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4" lg="3" className="mt-4">
                        <Card className="h-100 text-center">
                            <div className="p-2" >
                                <Card.Img variant="top" src="images/graduate.svg" style={{ maxWidth: '8rem'}}/>
                            </div>
                            <Card.Header>
                                <h5>Studenten</h5>
                            </Card.Header>
                            <Card.Body>
                                Toevoegen van nieuwe studenten en beheren van bestaande studenten
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4" lg="3" className="mt-4">
                        <Card className="h-100 text-center">
                            <div className="p-2" >
                                <Card.Img variant="top" src="images/magnifying-glass.svg" style={{ maxWidth: '8rem'}}/>
                            </div>
                            <Card.Header>
                                <h5>Zoeken</h5>
                            </Card.Header>
                            <Card.Body>
                                Snel opzoeken van studenten, docenten, opleidingen, vakken...
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4" lg="3" className="mt-4">
                        <Card className="h-100 text-center">
                            <div className="p-2" >
                                <Card.Img variant="top" src="images/alarm2.svg" style={{ maxWidth: '8rem'}}/>
                            </div>
                            <Card.Header>
                                <h5>Meldingen</h5>
                            </Card.Header>
                            <Card.Body>
                                Blijf volledig up-to-date omtrent alle veranderingen via simpele meldingen
                            </Card.Body>
                        </Card>
                    </Col>
                </CardDeck>
            </Container>
        </div>
    )
};

export default Home;
