import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const LesmomentFormHeader = () => {
    return (
        <div>
            <Container className="mt-4">
               <div className="d-flex align-items-center">
                    <Image className="mx-2"src="/images/clock.svg" alt="klok" style={{ width: "50px"}}/><h2>Nieuw Lesmoment</h2>
                </div>
                <hr/>
            </Container>
        </div>
    )
};

export default LesmomentFormHeader;
