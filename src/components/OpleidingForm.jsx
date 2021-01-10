import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OpleidingFormHeader from './OpleidingFormHeader';

const OpleidingForm = () => {
    return (
        <div>
            <OpleidingFormHeader/>
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
                            BaMA-structuur
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="Bachelor"
                            />
                            <Form.Check
                            type="radio"
                            label="Master"
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

export default OpleidingForm
