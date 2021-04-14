import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appoinment";
import Dashboard from "./components/DashBoard/Dashboard/Dashboard";
import AddDoctor from "./components/AddDoctor/AddDoctor";
import AllPatient from "./components/AllPatient/AllPatient";
import { createContext, useState } from "react";
import LogIn from "./components/LogIn/LogIn";
import PrivateRoute from "./components/LogIn/PrivateRoute/PrivateRoute";


export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/appointment">
          <Appointment/>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <Route path="/addDoctor">
         <AddDoctor/>
        </Route>
        <PrivateRoute path="/allPatient">
         <AllPatient/>
        </PrivateRoute>
        <Route path="/login">
         <LogIn/>
        </Route>
      </Switch> 
    </Router>
    </UserContext.Provider>
  );
}

export default App;
