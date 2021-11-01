import React from 'react';

const EachOrder = ({ eachOrder, handleCancelOrder }) => {
    console.log(eachOrder);
    /* const handleCancelOrder = (id) => {
        console.log('cancel', id);
        fetch(`http://https://desolate-brook-40241.herokuapp.com/updateMyOrder/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eachOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    } */

    return (
        <div className="shadow-sm px-4 py-2 my-4">
            <p>Address: {eachOrder.address}</p>
            <p>Ordered Product: {eachOrder.orderedProduct}</p>
            <button onClick={() => handleCancelOrder(eachOrder._id, eachOrder)} className="btn btn-sm btn-danger my-3">Cancel order</button>
        </div>
    );
};

export default EachOrder;