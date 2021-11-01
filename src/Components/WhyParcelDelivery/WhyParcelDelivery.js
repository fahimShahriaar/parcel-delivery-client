import React from 'react';
import Advantage from '../Advantage/Advantage';
import advantageData from './advantage.json';

const WhyParcelDelivery = () => {
    // console.log(advantageData);
    return (
        <div className="container">
            <h2 className="my-3 ms-2">Why Parcel Delivery?</h2>

            <div className="row">
                {
                    advantageData.map((data, i) => <Advantage data={data} key={i} />)
                }
            </div>

        </div>
    );
};

export default WhyParcelDelivery;