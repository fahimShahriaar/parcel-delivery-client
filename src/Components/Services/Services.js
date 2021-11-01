import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://desolate-brook-40241.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="my-5">
            <h2 className="text-center py-5">We provide services that <br /> you can <span className="custom-text">rely</span> on</h2>

            <div className="container">
                <div className="row">
                    {
                        services.map(service => <Service service={service} key={service.key} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;