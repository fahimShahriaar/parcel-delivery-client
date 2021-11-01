import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from '../../App';

const PlaceOrder = () => {
    const history = useHistory();
    const [user] = useContext(UserContext);
    console.log(user);
    let { key } = useParams();
    console.log(key);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://desolate-brook-40241.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(services);
    const service = services.find(s => Number(s.key) === Number(key));
    console.log(service);
    console.log(window.location.pathname);

    // inputRef
    const addressRef = useRef(null);
    const productRef = useRef(null);

    const handleSubmitOrder = (e) => {
        console.log(addressRef.current.value, productRef.current.value);
        const choosenService = {
            name: user.name,
            email: user.email,
            img: user.img,
            address: addressRef.current.value,
            orderedProduct: productRef.current.value,
            serviceKey: key
        }
        // console.log(choosenService);
        // send data to backend
        fetch('https://desolate-brook-40241.herokuapp.com/purchaseService', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(choosenService)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

        // reseting input field
        addressRef.current.value = ''
        productRef.current.value = ''

        // Redirect to My Order route
        history.push('/myOrder')
        e.preventDefault();
    }


    return (
        <div className="container">
            <div className="w-50 mx-auto p-4 my-5 shadow">
                <form onSubmit={handleSubmitOrder}>
                    <p>Name: <span className="ms-2 text-success">{user.name}</span></p>
                    <p>Email: <span className="ms-2 text-success">{user.email}</span></p>
                    <label>Address: </label>
                    <input type="text" ref={addressRef} placeholder="Address" className="form-control form-control-sm" /><br />
                    <label>Product you want: </label>
                    <input type="text" ref={productRef} placeholder="what you want..." className="form-control form-control-sm" /><br />
                    <input type="submit" value="Submit" className="btn btn-sm btn-success" />
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;