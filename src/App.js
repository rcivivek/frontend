import React from 'react';
import { BrowserRouter  as Router,Route}  from 'react-router-dom/';

import Users from './user/pages/Users';
import NewPlace  from './places/pages/NewPlace';
import { Redirect ,Switch} from 'react-router-dom/cjs/react-router-dom.min';

import MainNavigation from './shared/components/Navigation/MainNavigation';

import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Authenticate from './user/pages/Authenticate';



const  App=() =>{
  return <Router>
    <MainNavigation />
    <main>
    <Switch>
    <Route path='/' exact>
       <Users />
    </Route>
    <Route path="/:userId/places" exact>
      <UserPlaces />
    </Route>
    <Route path='/places/new' exact>
       <NewPlace />
    </Route>
    <Route path="/places/:placeId" exact>
       <UpdatePlace />
    </Route>
    <Route path='/auth' exact>
      <Authenticate login ={true}/>
    </Route>
    <Route path='/reg' exact> 
      <Authenticate login={false}/>
    </Route>
     <Redirect to ='/'>
    </Redirect>
    {/* <Redirect to='/auth' exact/>
       <Authenticate /> */}
    </Switch>
    </main>
    </Router>
}

export default App;
