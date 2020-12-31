import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent />
          <div className="container">
            <Switch>
            {/* // step : 1 */}
              <Route path="/" exact component={ListEmployeeComponent}></Route>
              <Route path="/employees" component={ListEmployeeComponent}></Route>
              <Route path="/addEmployees/:id" component={CreateEmployeeComponent} ></Route>
              {/* <Route path="/updateEmployees/:id" component={UpdateEmployeeComponent} ></Route> */}

              <Route path="/viewEmployees/:id" component={ViewEmployeeComponent} ></Route>
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
