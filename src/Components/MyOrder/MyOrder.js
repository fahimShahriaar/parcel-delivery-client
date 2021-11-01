import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import EachOrder from '../EachOrder/EachOrder';

const MyOrder = () => {
    const [user] = useContext(UserContext);
    const [orderHistories, setOrderHistories] = useState([]);

    useEffect(() => {
        fetch('https://desolate-brook-40241.herokuapp.com/myOrder')
            .then(res => res.json())
            .then(data => setOrderHistories(data))
    }, [orderHistories]);
    // console.log(orderHistories);
    const loggedInUSerOrder = orderHistories.filter(order => order.email.toString() === user.email.toString());
    // console.log(loggedInUSerOrder);
    // handle Cancel Order
    const handleCancelOrder = (id, eachOrder) => {
        console.log('cancel', id);
        fetch(`https://desolate-brook-40241.herokuapp.com/updateMyOrder/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eachOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 p-4">
                    <h3>User Information:</h3>
                    <img src={user.img} alt="" />
                    <h5>{user.name}</h5>
                    <p>{user.email}</p>
                </div>
                <div className="col-md-6 p-4">
                    <div>
                        {
                            loggedInUSerOrder.length >= 1 && loggedInUSerOrder.map(eachOrder => <EachOrder key={eachOrder._id} eachOrder={eachOrder} handleCancelOrder={handleCancelOrder} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;