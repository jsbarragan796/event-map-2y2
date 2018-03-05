import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { SingupForm } from "./components/login/signupForm";
import { LoginForm } from "./components/login/loginForm";
import { About } from "./components/globales/about";
import { CommonUser } from "./components/login/users/commonUser";
import { EnterpriceUser } from "./components/login/users/enterpriceUser"; 
import { LocationList } from "./components/locationsList/locationList";
import { LocationDetail } from "./components/locationsList/locationDetail";
import { EventList } from "./components/eventList/eventList";
import { EventDetail } from "./components/eventList/eventDetail";


import "./index.css";


ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route path="/" component={About} />
        <Route path="/signup" component={SingupForm} />
        <Route path="/login" component={LoginForm} />   

        <Route path="/user/:idUser" component={CommonUser} />
        <Route path="/enterprice/:idEnterprice" component={EnterpriceUser} />

        <Route path="/locations" component={LocationList} />
        <Route path="/locations/:idLocation" component={LocationDetail} />
        <Route path="/events" component={EventList} />
        <Route path="/events/:idEvent" component={EventDetail} />

      </Switch>
    </App>
  </BrowserRouter>
  ,document.getElementById("root"));
  
registerServiceWorker();
