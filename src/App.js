import React from 'react';
import { BrowserRouter  as Router,Route}  from 'react-router-dom/';

import Users from './user/pages/Users';
import NewPlace  from './places/pages/NewPlace';
import { Redirect ,Switch} from 'react-router-dom/cjs/react-router-dom.min';

const  App=() =>{
  return <Router>
    <Switch>
    <Route path='/' exact>
       <Users />
    </Route>
    <Route path='/places/new' exact>
       <NewPlace />
    </Route>
    <Redirect to='/'/>
    </Switch>
    </Router>
}

export default App;
