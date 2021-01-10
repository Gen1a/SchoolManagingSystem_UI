import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ResultaatFormHeader from './ResultaatFormHeader';

const ResultaatForm = () => {
    return (
        <div>
            <ResultaatFormHeader/>
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
                    <Form.Label column sm={2}>Student:</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" size="sm" custom>
                                <option>Student 1</option>
                                <option>Student 2</option>
                                <option>Student 3</option>
                                <option>Student 4</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Commentaar:</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows={5} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Form.Label column sm={2}>Datum examen:</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="date"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Form.Label column sm={2}>Examenvorm:</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" size="sm" custom>
                                <option>Mondeling</option>
                                <option>Schriftelijk</option>
                                <option>Online</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
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

export default ResultaatForm
