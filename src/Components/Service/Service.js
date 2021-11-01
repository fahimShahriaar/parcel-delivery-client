import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // console.log(service);
    const { title, description, img, price, key } = service;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="my-4 shadow rounded service-card">
                <img src={img} alt="" className="img-fluid service-banner" />
                <div className="p-4 service-detail">
                    <h5>{title}</h5>
                    <p className="">{description}</p>
                    <p><small>Service Charge: <span className="fw-bold"> {price}/-</span></small></p>
                </div>
                <Link to={`/placeOrder/${key}`}>
                    <button className="btn btn-sm custom-btn m-4">Purchase Service</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;