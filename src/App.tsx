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
import { Navbar, Nav, NavDropdown } from "react-bootstrap";


const appReducers = combineReducers({
  challenge35: challenge35Reducer,
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
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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

                {/* <NavLink exact to="/challenge35">
                  Challenge 3.5
                </NavLink> */}
                <NavLink className="mr-5" exact to="/challenge4">
                  Challenge 4
                </NavLink>
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
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
