import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import "./scss/style.scss";
import routes from "./routes";
import Table from "./views/tables/Tables"

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login"  render={(props) => <Login name="Login Page" {...props}/>} />
              <Route exact path="/register" render={props => <Register name="Register Page" {...props}/>} />
              <Route exact path="/404" render={props => <Page404 name="Page 404" {...props}/>} />
              <Route exact path="/500" render={props => <Page500 name="Page 500"{...props}/>} />
                <Route
                  path="/"
                  render={(props: RouteComponentProps<any>) => (
                      <TheLayout {...props} />
                  )}
                />;
            
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
