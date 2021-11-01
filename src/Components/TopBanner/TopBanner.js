import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className="top-banner text-white">
            <Container className="h-100">
                <Row className="h-100 d-flex align-items-center justify-content-center">
                    <Col className="text-center">
                        <h1 className="lh-lg header-txt">Others deliver boxes <br />We deliver <span className="custom-text">dreams</span></h1>
                    </Col>

                    {/*  <Col className="px-5 ms-5">
                        <div className="mx-5 w-75 bg-white py-5 rounded">
                            <form>
                                <input type="text" className="form-control form-control-sm w-75 mx-auto px-2 my-2" placeholder="name" />
                                <input type="text" className="form-control form-control-sm w-75 mx-auto px-2 my-2" placeholder="email" />
                            </form>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </div>
    );
};

export default TopBanner;