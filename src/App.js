import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import RegisterForm from './Components/ServiceRegister/RegisterForm/RegisterForm';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminHome from './Components/Admin/adminHome/AdminHome';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import ClientDashboard from './Components/Client/ClientDashboard/ClientDashboard';
import ClientFeedback from './Components/Client/ClientFeedback/ClientFeedback';
import ParentDashboard from './Components/ParentDashboard/ParentDashboard';
import Test from './Components/Home/WorkType/WorkType/Test';

export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  const [image, setImage] = useState('')


  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, image, setImage }}>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/test">
            <Test></Test>
          </Route>


          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/register/:service">
            <RegisterForm></RegisterForm>
          </PrivateRoute>

          {/* <Route path="/serviceRegister">
            <ServiceRegisterInfo></ServiceRegisterInfo>
          </Route> */}

          <PrivateRoute path="/parentDashboard">
            <ParentDashboard></ParentDashboard>
          </PrivateRoute>

          <PrivateRoute path="/clientDashboard">
            <ClientDashboard></ClientDashboard>
          </PrivateRoute>

          <PrivateRoute path="/feedback">
            <ClientFeedback></ClientFeedback>
          </PrivateRoute>

          <PrivateRoute path="/addService">
            <AdminHome></AdminHome>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>


        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
