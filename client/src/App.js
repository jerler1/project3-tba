import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddItem from "./pages/Admin/AddItem/AddItem";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import EditItem from "./pages/Admin/EditItem/EditItem";
import Login from "./pages/Admin/Login/Login";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Listing from "./pages/Listings/Listing";
import Navbar from "./components/Navbar/Navbar";
import Success from "./pages/Success/Success";
import Cancel from "./pages/Cancel/Cancel";
import { ProvideAuth } from "./hooks/use-auth";
import { ProvideCart } from "./hooks/useCart";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <ProvideAuth>
        <ProvideCart>
          <div>
            <Navbar />
            <main className="App">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/listing" component={Listing} />
                <Route exact path="/listing/:id" component={Detail} />
                <Route exact path="/admin" component={Login} />
                {/* <Route exact path="/admin/dashboard" component={Dashboard} /> */}
                <PrivateRoute exact path="/admin/dashboard">
                  <Dashboard />
                </PrivateRoute>
                <Route exact path="/admin/addItem" component={AddItem} />
                <Route exact path="/admin/editItem/:id" component={EditItem} />
                <Route exact path="/success/:id" component={Success} />
                <Route exact path="/cancel" component={Cancel} />
              </Switch>
            </main>
          </div>
        </ProvideCart>
      </ProvideAuth>
    </Router>
  );
}

export default App;
