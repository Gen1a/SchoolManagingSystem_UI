import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import VakFormHeader from './VakFormHeader';

const VakForm = () => {
    return (
        <div>
            <VakFormHeader/>
            <Container className="mt-4 p-2">
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Naam:</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Beschrijving:</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows={5} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Form.Label column sm={2}>Studieomvang:</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number"/>
                            <Form.Text muted>
                               Aantal studiepunten
                            </Form.Text>
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Semester
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check inline
                            type="radio"
                            label="1"
                            />
                            <Form.Check inline
                            type="radio"
                            label="2"
                            />
                        </Col>
                        </Form.Group>
                    </fieldset>
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
                            Tweede examenkans mogelijk?
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="Ja"
                            />
                            <Form.Check
                            type="radio"
                            label="Nee"
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

export default VakForm
