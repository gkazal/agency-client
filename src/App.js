import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Services from './Components/Admin/adminHome/Services';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import RegisterPage from './Components/ServiceRegister/RegisterPage/RegisterPage';
import RegisterForm from './Components/ServiceRegister/RegisterForm/RegisterForm';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceRegisterInfo from './Components/ServiceRegisterInfo/ServiceRegisterInfo';
import Feedback from './Components/Feedback/Feedback';

export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  const [image, setImage] = useState('')


  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, image, setImage}}>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/admin">
            <Services></Services>
          </Route>


          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/register/:service">
            <RegisterForm></RegisterForm>
          </PrivateRoute>

          <Route path="/serviceRegister/:email">
            <ServiceRegisterInfo></ServiceRegisterInfo>
          </Route>

          <PrivateRoute path="/feedback">
            <Feedback></Feedback>
          </PrivateRoute>




        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
