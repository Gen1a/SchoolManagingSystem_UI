import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const ResultaatFormHeader = () => {
    return (
        <div>
            <Container className="mt-4">
               <div className="d-flex align-items-center">
                    <Image className="mx-2"src="/images/exam.svg" alt="resultaat" style={{ width: "50px"}}/><h2>Nieuw Resultaat</h2>
                </div>
                <hr/>
            </Container>
        </div>
    )
};

export default ResultaatFormHeader;
