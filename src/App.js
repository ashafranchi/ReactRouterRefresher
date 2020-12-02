import React from "react";
import './App.css';
import "bulma/css/bulma.min.css";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route path="/profile/:name">
              <Profile />
            </Route>
          </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
