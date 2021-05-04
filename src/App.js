import "./App.css";
import HomePage from "./Component/HomePage";
import { Route, Switch } from "react-router-dom";
import MasterMenu from "./Component/MasterMenu";
import SubMenu from "./Component/SubMenu";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/menu/:masterMenuName" component={MasterMenu}></Route>
        <Route path="/submenu/:masterMenuName/:subMenuName" component={SubMenu}></Route>
       
      </Switch>
    </div>
  );
}

export default App;
