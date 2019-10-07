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
import Challenge4 from "./screens/Challenge4";
import Challenge35Reducer from "./store/Challenge35/reducer";
const appReducers = combineReducers({
  challenge35: Challenge35Reducer,
  field: FirstScreenReducer,
});

const store = createStore(appReducers, composeWithDevTools());

class App extends React.Component {
  render(): JSX.Element {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="dashboard">
            <div className="menu">
              <NavLink exact to="/challenge1">
                Challenge 1
              </NavLink>
              <NavLink exact to="/challenge2">
                Challenge 2
              </NavLink>
              <NavLink exact to="/challenge3">
                Challenge 3
              </NavLink>
              <NavLink exact to="/challenge35">
                Challenge 3.5
              </NavLink>
              <NavLink exact to="/challenge4">
                Challenge 4
              </NavLink>
            </div>
            <div className="content">
              <Switch>
                <Route exact path="/challenge1" component={Challenge1} />
                <Route exact path="/challenge2" component={Challenge2} />
                <Route exact path="/challenge3" component={Challenge3} />
                <Route exact path="/challenge35" component={Challenge35} />
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
