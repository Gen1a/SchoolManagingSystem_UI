import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const OpleidingFormHeader = () => {
    return (
        <div>
            <Container className="mt-4">
               <div className="d-flex align-items-center">
                    <Image className="mx-2"src="/images/mortarboard.svg" alt="docent" style={{ width: "50px"}}/><h2>Nieuwe Opleiding</h2>
                </div>
                <hr/>
            </Container>
        </div>
    )
};

export default OpleidingFormHeader;
