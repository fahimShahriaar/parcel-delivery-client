import React from 'react';


const Advantage = ({ data }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 p-4">
            <div className="shadow p-4">
                <h5>{data.title}</h5>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default Advantage;