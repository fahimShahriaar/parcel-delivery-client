// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

// Firebase Authentication
import initializeAuthentication from './Firebase/firebase.initialize';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import MyOrder from './Components/MyOrder/MyOrder';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';

// Context API
export const UserContext = createContext('user');


initializeAuthentication();

function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <NavBar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/placeOrder/:key">
            <PlaceOrder />
          </PrivateRoute>
          <PrivateRoute path="/myOrder">
            <MyOrder />
          </PrivateRoute>
          <PrivateRoute path="/manageAllOrders">
            <ManageAllOrders />
          </PrivateRoute>

          <Route path="*">
            <h1>404! Page not Found.</h1>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;


// my orders, manage all orders, add a new service
// login/sign up