import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ******************** Pages ********************
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";


// ******************** Style ********************
import "./App.css";

const App = () => {
  return (
  	<ErrorBoundary>
	    <Router>
	      <Switch>
	        <Route path="/" component={Home} />
	      </Switch>
	    </Router>
    </ErrorBoundary>
  );
};

export default App;
