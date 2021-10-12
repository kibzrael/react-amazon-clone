// import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./pages/cart";
import Search from "./pages/search";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
