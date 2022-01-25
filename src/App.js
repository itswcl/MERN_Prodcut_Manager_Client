import { Switch, Route } from 'react-router-dom'
import './App.css';
import Main from './Views/Main';
import Detail from './Views/Detail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/:id">
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
