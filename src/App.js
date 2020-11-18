import './App.css';
import Header from './components/layout/header'
import CatFactList from './components/public/cat-facts-list'
import Counter from './components/public/counter'
import Clicker from './components/public/clicker'
import Dashboard from './components/private/dashboard'
import Login from './components/auth/login'
import Register from './components/auth/register'
import store from './store'
import {Provider} from 'react-redux'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import PrivateRoute from './components/auth/private-route'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={CatFactList} />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/clicker" component={Clicker} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>  
      </Router>
    </Provider>

  );
}

export default App;
