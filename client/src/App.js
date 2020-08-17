import React from "react";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Switch>
      <Route exact path={["/", "/books"]}>
            <Books />
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
