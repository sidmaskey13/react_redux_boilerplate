import './App.css';
import Header from './components/layout/header'
import CatFactList from './components/public/cat-facts-list'
import Counter from './components/public/counter'
import Clicker from './components/public/clicker'
import store from './store'
import {Provider} from 'react-redux'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

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
          </Switch>
        </div>  
      </Router>
    </Provider>

  );
}

export default App;
