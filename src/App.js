import { Switch, Route } from 'react-router-dom'
import './App.css';
import Main from './Views/Main';
import Detail from './Views/Detail';
import Update from './Views/Update';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/:id/edit">
          <Update />
        </Route>

        <Route path="/:id">
          <Detail />
        </Route>

        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
