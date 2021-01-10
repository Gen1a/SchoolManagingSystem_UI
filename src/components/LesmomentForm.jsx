import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LesmomentFormHeader from './LesmomentFormHeader';

const LesmomentForm = () => {
    return (
        <div>
            <LesmomentFormHeader/>
            <Container className="mt-4 p-2">
                <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>Vak:</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" size="sm" custom>
                                <option>Ontwerp</option>
                                <option>Programmeren Gevorderd</option>
                                <option>Programmeren Specialisatie</option>
                                <option>Web 2 Plus</option>
                                <option>Web 3</option>
                                <option>Databanken</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Form.Label column sm={2}>Docent:</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" size="sm" custom>
                                <option>Dirk Andries</option>
                                <option>Luc Vervoort</option>
                                <option>Tom Van de Wiele</option>
                                <option>Annick Burms</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Lesinhoud:</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows={5} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Form.Label column sm={2}>Datum:</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="date"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Form.Label column sm={2}>Onderwijstaal:</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" size="sm" custom>
                                <option>Nederlands</option>
                                <option>Frans</option>
                                <option>Engels</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Lesvorm:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="On-Campus"
                            />
                            <Form.Check
                            type="radio"
                            label="Remote"
                            />
                        </Col>
                        </Form.Group>
                    </fieldset>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }} className="mt-2">
                        <Button type="submit" className="text-">Bevestig</Button>
                        <Button type="reset" variant="dark" className="ml-2">Reset</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default LesmomentForm
