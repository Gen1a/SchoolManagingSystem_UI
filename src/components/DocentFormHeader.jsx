import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const DocentFormHeader = () => {
    return (
        <div>
            <Container className="mt-4">
               <div className="d-flex align-items-center">
                    <Image className="mx-2"src="/images/teacher.svg" alt="docent" style={{ width: "50px"}}/><h2>Nieuwe Docent</h2>
                </div>
                <hr/>
            </Container>
        </div>
    )
};

export default DocentFormHeader;
