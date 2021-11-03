import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import YourAppointment from './Component/YourAppointment/YourAppointment';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/yourAppointment">
            <YourAppointment></YourAppointment>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
