import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar'
import Dashboard from './component/dashboard/Dashboard';
import ProjectDetails from './component/projects/ProjectDetails';
import SignIn from './component/auth/signIn';
import SignUp from './component/auth/signUp';
import CreateProject from './component/projects/CreateProject'
require('dotenv').config()
class App extends Component {
  render() {
    return (
        <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Navbar />
        {/* makes sure only one route is loaded up at a time and d route dat is loaded up is the first that react matches over here! */}
        <Switch>
        <Route   exact path='/' component={Dashboard} />
        <Route path='/project/:id' component={ProjectDetails} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/create' component={CreateProject} />
        </Switch>
        </header>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
