import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import FirstScreenReducer from "./store/FirstScreen/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { NavLink, Route, Switch, BrowserRouter } from "react-router-dom";
import "./assets/styles/main.css";
import Challenge1 from "./screens/Challenge1";
import Challenge2 from "./screens/Challenge2";
import Challenge3 from "./screens/Challenge3";
import Challenge35 from "./screens/Challenge35";
import CreateToDo from "./screens/Challenge35/createTodo";
import Challenge4 from "./screens/Challenge4";
import challenge35Reducer from "./store/Challenge35/reducer";
import challenge4Reducer from "./store/Challenge4/users/reducer";
import alertsReducer from "./store/Challenge4/alerts/reducer";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import CreateUser from "./screens/Challenge4/createUser";
import EditUser from "./screens/Challenge4/editUser";

const appReducers = combineReducers({
  challenge35Reducer: challenge35Reducer,
  challenge4Reducer: challenge4Reducer,
  alertsReducer : alertsReducer,
  field: FirstScreenReducer
});

const store = createStore(appReducers, composeWithDevTools());

class App extends React.Component {
  render(): JSX.Element {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="dashboard">
            <div className="menu">
              <Navbar collapseOnSelect expand="lg">
                <NavLink className="mr-5" exact to="/challenge1">
                  Challenge 1
                </NavLink>
                <NavLink className="mr-5" exact to="/challenge2">
                  Challenge 2
                </NavLink>
                <NavLink className="mr-5" exact to="/challenge3">
                  Challenge 3
                </NavLink>

                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <NavDropdown
                      className="mr-5"
                      title="Challenge 3.5"
                      id="collasible-nav-dropdown"
                    >
                      <NavLink
                        className="dropdown-item text-black"
                        to="/challenge35"
                      >
                        List of To Do's
                      </NavLink>
                      <NavLink
                        className="dropdown-item text-black"
                        to="/challenge35/new"
                      >
                        New To Do
                      </NavLink>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <NavDropdown
                      className="mr-5"
                      title="Challenge 4"
                      id="collasible-nav-dropdown"
                    >
                      <NavLink
                        className="dropdown-item text-black"
                        to="/challenge4"
                      >
                        List of Users
                      </NavLink>
                      <NavLink
                        className="dropdown-item text-black"
                        to="/challenge4/user/new"
                      >
                        New User
                      </NavLink>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <div className="content">
              <Switch>
                <Route exact path="/challenge1" component={Challenge1} />
                <Route exact path="/challenge2" component={Challenge2} />
                <Route exact path="/challenge3" component={Challenge3} />
                <Route exact path="/challenge35" component={Challenge35} />
                <Route exact path="/challenge35/new" component={CreateToDo} />
                <Route exact path="/challenge4" component={Challenge4} />
                <Route
                  exact
                  path="/challenge4/user/new"
                  component={CreateUser}
                />
                {/* /challenge4/:user_id/edit */}
                <Route
                  path="/challenge4/user/:user_id/edit"
                  exact
                  component={EditUser}
                />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
