import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQSingle = ({ faq }) => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{faq.que}</Accordion.Header>
                    <Accordion.Body>{faq.ans}</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQSingle;