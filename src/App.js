import React from 'react';
import { BrowserRouter  as Router,Route}  from 'react-router-dom/';

import Users from './user/pages/Users';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const  App=() =>{
  return <Router>
    <Route path='/' exact>
       <Users />
    </Route>
    <Redirect to='/'/>
    </Router>
}

export default App;
