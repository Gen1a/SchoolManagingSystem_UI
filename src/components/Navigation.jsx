import React , {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

const Navigation = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Waarschuwing</Modal.Title>
                </Modal.Header>
                <Modal.Body>Ben je zeker dat je wil uitloggen?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Ja
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Blijf ingelogd
                    </Button>
                </Modal.Footer>
            </Modal>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/" className="mr-5">
                    <img
                        alt="school"
                        src="/favicon-32x32.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-center"
                    />{' '}
                    Schooladministratie
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-3">
                        <NavDropdown 
                            id="basic-nav-dropdown"
                            className="mr-5"
                            title={<div className="d-flex align-items-center"><img
                                alt="new"
                                src="/images/add.svg"
                                width="35"
                                height="35"
                                className="d-inline-block align-center"
                            /><div className="nav-icon-text">Nieuw</div></div>}>
                                <NavDropdown.Item href="/nieuw/opleiding" >
                                    <img
                                        alt="opleiding"
                                        src="/images/mortarboard.svg"
                                        width="35"
                                        height="35"
                                        className="d-inline-block align-center"
                                    />{' '}
                                    Nieuwe Opleiding
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/nieuw/vak">
                                    <img
                                        alt="vak"
                                        src="/images/books.svg"
                                        width="35"
                                        height="35"
                                        className="d-inline-block align-center"
                                    />{' '}
                                    Nieuw Vak
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/nieuw/lesmoment">
                                    <img
                                        alt="lesmoment"
                                        src="/images/clock.svg"
                                        width="35"
                                        height="35"
                                        className="d-inline-block align-center"
                                    />{' '}
                                    Nieuw Lesmoment
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/nieuw/resultaat">
                                    <img
                                        alt="resultaat"
                                        src="/images/exam.svg"
                                        width="35"
                                        height="35"
                                        className="d-inline-block align-center"
                                    />{' '}
                                    Nieuw Resultaat
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/nieuw/docent">
                                    <img
                                        alt="docent"
                                        src="/images/teacher.svg"
                                        width="35"
                                        height="35"
                                        className="d-inline-block align-center"
                                    />{' '}
                                    Nieuwe Docent
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/nieuw/student">
                                    <img
                                        alt="student"
                                        src="/images/graduate.svg"
                                        width="35"
                                        height="35"
                                        className="d-inline-block align-center"
                                    />{' '}
                                    Nieuwe Student
                                </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown 
                            className="mr-5"
                            title={<div className="d-flex align-items-center"><img
                                alt="team"
                                src="/images/team.svg"
                                width="35"
                                height="35"
                                className="d-inline-block align-center"
                            /><div className="nav-icon-text">Docenten & Studenten</div></div>}>  
                            <NavDropdown.Item href="#">
                                <img
                                    alt="docent"
                                    src="/images/teacher.svg"
                                    width="35"
                                    height="35"
                                    className="d-inline-block align-center"
                                />{' '}
                                    Docenten
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                <img
                                    alt="student"
                                    src="/images/graduate.svg"
                                    width="35"
                                    height="35"
                                    className="d-inline-block align-center"
                                />{' '}
                                    Studenten
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown 
                            className="mr-5"
                            title={<div className="d-flex align-items-center"><img
                            alt="school"
                            src="/images/school.svg"
                            width="35"
                            height="35"
                            className="d-inline-block align-center"
                        /><div className="nav-icon-text">Opleidingen & Vakken</div></div>}>  
                            <NavDropdown.Item href="#">
                                <img
                                    alt="opleiding"
                                    src="/images/mortarboard.svg"
                                    width="35"
                                    height="35"
                                    className="d-inline-block align-center"
                                />{' '}
                                    Opleidingen
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                <img
                                    alt="boeken"
                                    src="/images/books.svg"
                                    width="35"
                                    height="35"
                                    className="d-inline-block align-center"
                                />{' '}
                                    Vakken
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown 
                            className="mr-5"
                            title={<div className="d-flex align-items-center"><img
                            alt="kalender"
                            src="/images/calendar.svg"
                            width="35"
                            height="35"
                            className="d-inline-block align-center"
                        /><div className="nav-icon-text">Kalender</div></div>}>  
                            <NavDropdown.Item href="#">
                                <img
                                    alt="opleiding"
                                    src="/images/mortarboard.svg"
                                    width="35"
                                    height="35"
                                    className="d-inline-block align-center"
                                />{' '}
                                    Lesmomenten
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                <img
                                    alt="boeken"
                                    src="/images/books.svg"
                                    width="35"
                                    height="35"
                                    className="d-inline-block align-center"
                                />{' '}
                                    Vakken
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown 
                            className="mr-5"
                            title={<div className="d-flex align-items-center"><img
                            alt="resultaten"
                            src="/images/result.svg"
                            width="35"
                            height="35"
                            className="d-inline-block align-center"
                        /><div className="nav-icon-text">Resultaten</div></div>}>  
                            <NavDropdown.Item href="#">
                                <img
                                    alt="opdracht"
                                    src="/images/test.svg"
                                    width="35"
                                    height="35"
                                    className="d-inline-block align-center"
                                />{' '}
                                    Opdrachten
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                <img
                                    alt="examen"
                                    src="/images/exam2.svg"
                                    width="35"
                                    height="35"
                                    className="d-inline-block align-center"
                                />{' '}
                                    Examens
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown 
                            title={<div className="d-flex align-items-center"><img
                                alt="zoeken"
                                src="/images/loupe.svg"
                                width="35"
                                height="35"
                                className="d-inline-block align-center"
                        /><div className="nav-icon-text">Zoeken</div></div>}>  
                            <Nav.Item className="p-2">
                                <Form disabled>
                                    <FormControl type="text" placeholder="Student, Docent, Vak..." className="my-2" style={{ width: "310px"}}/>
                                    <Button size="sm" type="submit" variant="light">Zoeken</Button>
                                </Form>
                            </Nav.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link className="p-2 ml-2 mt-1" href="#">
                            <div className="d-flex align-items-center"><img
                                alt="meldingen"
                                src="/images/help.svg"
                                width="35"
                                height="35"
                                className="d-inline-block align-center"/>
                            <div className="nav-icon-text">Help</div></div>
                        </Nav.Link>
                        <NavDropdown 
                            className="mr-3 ml-3 mt-1"
                            title={<div className="d-flex align-items-center"><img
                            alt="meldingen"
                            src="/images/alarm.svg"
                            width="35"
                            height="35"
                            className="d-inline-block align-center"
                    /><div className="nav-icon-text">Meldingen</div></div>}>
                            <NavDropdown.Item href="#" className="notification">
                                1 Nieuw chatbericht
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className="ml-3 mt-1" title={
                            <div>
                                <Image src="/images/Frederik.jpg" roundedCircle style={{ width: "40px"}}/>
                                <Badge pill variant="light" className="ml-2 px-4 py-2">Frederik</Badge>
                            </div>}>  
                            <NavDropdown.Item href="#">
                                    Mijn Profiel
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={handleShow}>
                                    Uitloggen
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default Navigation;
