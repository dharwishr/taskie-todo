import React, { useEffect, useState } from "react";

import { either, isEmpty, isNil } from "ramda";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { registerIntercepts, setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";
import { Login, Signup } from "components/Authentication";
import PrivateRoute from "components/Common/PrivateRoute";
import Dashboard from "components/Dashboard";

import { getFromLocalStorage } from "utils/storage";


const App = () => {

    const [loading, setLoading] = useState(true);
    const authToken = getFromLocalStorage("authToken");
    const isLoggedIn = !either(isNil, isEmpty)(authToken);
    useEffect(() => {
      registerIntercepts();
      initializeLogger();
      setAuthHeaders(setLoading);
    }, []);
    
      if (loading) {
        return <h1>Loading...</h1>;
      }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact component={Login} path="/login" />
        <Route exact component={Signup} path="/signup" />
        <PrivateRoute
          component={Dashboard}
          condition={isLoggedIn}
          path="/"
          redirectRoute="/login"
        />
      </Switch>
    </Router>
  );
  
};

export default App;
