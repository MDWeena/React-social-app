import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/pages/auth/Login';
import Register from './Components/pages/auth/Register';
import Timeline from "./Components/pages/timeline/Timeline";
import { Toaster } from 'react-hot-toast';
import VerifyUser from "./Components/pages/auth/VerifyUser";
import Profile from "./Components/pages/profile/Profile";
import {useContext} from 'react'
import {AuthContext} from './context/AuthContext'

 
function App() {
 const {user} = useContext(AuthContext)
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user ?
              <Timeline />
              : <Login />
            }
          </Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/verify-user" component={VerifyUser}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/profile" component={Profile}></Route>
        </Switch>
      </Router>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            color: 'white'
          },
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}
      />
    </>
  );
}

export default App;
