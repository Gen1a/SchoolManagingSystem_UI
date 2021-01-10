import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Error from './components/Error';
import Footer from './components/Footer';
import DocentForm from './components/DocentForm';
import StudentForm from './components/StudentForm';
import OpleidingForm from './components/OpleidingForm';
import VakForm from './components/VakForm';
import LesmomentForm from './components/LesmomentForm';
import ResultaatForm from './components/ResultaatForm';

const App = () => {

    return (
        <div>
            <Navigation />
            <Container style={{ paddingBottom: '20px'}}>
                <Switch>
                    {/* If path matches => route gets rendered => more specific paths at the top */}
                    <Route exact path="/nieuw/docent">
                        <DocentForm />
                    </Route>
                    <Route exact path="/nieuw/student">
                        <StudentForm />
                    </Route>
                    <Route exact path="/nieuw/vak">
                        <VakForm />
                    </Route>
                    <Route exact path="/nieuw/opleiding">
                        <OpleidingForm />
                    </Route>
                    <Route exact path="/nieuw/lesmoment">
                        <LesmomentForm />
                    </Route>
                    <Route exact path="/nieuw/resultaat">
                        <ResultaatForm />
                    </Route>
                    <Route exact path="/error">
                        <Error />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
            <Footer />
        </div>
    )
};

export default App;
