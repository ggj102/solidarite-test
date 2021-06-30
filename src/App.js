import { Route } from 'react-router';

import './App.css';
import Detail from './pages/Detail';
import Main from './pages/Main';

function App() {
  return (
    <>
     <Route path = "/detail/:tab/:id" component={Detail}/>
     <Route exact path = "/" component={Main}/>
    </>
  );
}

export default App;
