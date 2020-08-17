import React from "react";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function App() {
  const options = {
    position: "bottom center",
    timeout: 2000,
    offset: "30px",
    transition: "scale",
  };

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <AlertProvider template={AlertTemplate} {...options}>
              <Books />
            </AlertProvider>
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
