import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import StudentFormHeader from './StudentFormHeader';

const StudentForm = () => {
    return (
        <div>
            <StudentFormHeader/>
            <Container className="mt-4 p-2">
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Profielfoto:</Form.Label>
                        <Form.File className="ml-3"
                            id="custom-file-translate-html"
                            label="Voeg je foto toe"
                            data-browse="Bestand kiezen"
                            custom
                        />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Email:</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email"/>
                            <Form.Text muted>
                               Een geldig e-mailadres is van de vorm 'frederik@example.com'.
                            </Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Wachtwoord:</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password"/>
                            <Form.Text muted>
                                Je wachtwoord moet tussen 8 en 20 karakters lang zijn, letters en nummers bevatten, en mag geen spaties bevatten.
                            </Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Voornaam:</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Form.Label column sm={2}>Achternaam:</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Form.Label column sm={2}>Straat:</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Form.Label column sm={2}>Nummer:</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Form.Label column sm={2}>Postcode:</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Form.Label column sm={2}>Gemeente:</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Opleiding:</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" size="sm" custom>
                                <option>Toegepaste Informatica</option>
                                <option>Handelswetenschappen</option>
                                <option>Verpleegkunde</option>
                                <option>Rechten</option>
                                <option>Leerkracht Lager Onderwijs</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Geslacht
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="Man"
                            />
                            <Form.Check
                            type="radio"
                            label="Vrouw"
                            />
                        </Col>
                        </Form.Group>
                    </fieldset>
                    <Form.Group as={Row} controlId="formHorizontalCheck">
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label={<a href="#" rel="noreferrer" target="_blank">Ik ga akkoord met de algemene voorwaarden</a>} />
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

export default StudentForm
