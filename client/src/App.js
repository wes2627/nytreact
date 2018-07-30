import React from 'react';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from './Pages/NoMatch';
import Home from './Pages/Home';


const App = () => (
 <Router>
   <div>
     <Switch>
       <Route exact path="/home" component={Home} />
       <Route component={NoMatch} />
       </Switch>
     </div>
   </Router>
);

export default App;
