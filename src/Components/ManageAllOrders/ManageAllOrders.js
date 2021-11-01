import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orderHistories, setOrderHistories] = useState([]);
    useEffect(() => {
        fetch('https://desolate-brook-40241.herokuapp.com/myOrder')
            .then(res => res.json())
            .then(data => setOrderHistories(data))
    }, []);
    console.log(orderHistories);
    return (
        <div className="container">
            {
                orderHistories.map(eachOrder => <div key={eachOrder._id} className="p-4 shadow m-4 w-50">
                    <div className="d-flex align-items-center justify-content-between">
                        <img src={eachOrder.img} alt="" />
                        <div className="w-50">
                            <p>Name: {eachOrder.name}</p>
                            <p>Email: {eachOrder.email}</p>
                            <p>Ordered Product: {eachOrder.orderedProduct}</p>
                        </div>
                        <button className="btn btn-sm btn-danger">Cancel Order</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;