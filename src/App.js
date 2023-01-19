import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Login from "./Components/Login";
import Contact from "./Components/Contact";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* Router */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
