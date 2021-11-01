import React, { useContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const provider = new GoogleAuthProvider();

const NavBar = () => {
    const [user, setUser] = useContext(UserContext);

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(result => {
                const { displayName, email, photoURL, uid } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email,
                    img: photoURL,
                    id: uid
                }

                setUser(loggedInUser)

            }).catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    const handleGoogleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("Sign-out successful.");
            setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Parcel Delivery</Navbar.Brand>
                    {user.email && <span className="ms-5">Welcome {user.name}!</span>}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            {user.email && <Nav.Link as={Link} to="/myOrder">My Orders</Nav.Link>}
                            {user.email && <Nav.Link as={Link} to="/manageAllOrders">Manage All orders</Nav.Link>}

                            {!user.email ?
                                <button onClick={handleGoogleSignIn} className="btn btn-success px-4 mx-2">Sign in with Google</button> :
                                <button onClick={handleGoogleSignOut} className="btn btn-danger px-4 mx-2">Sign out</button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;