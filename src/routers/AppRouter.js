import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage  from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();  //En lugar de usar browser router

//<Route path="/edit" component={EditExpensePage}>
//<Route path="/:id" component={EditExpensePage}/>
//</Route> 
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />   
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;


//Para que no de error la ruta  create (que no existe), hay que cambiar webpack.conf
//para decirle que se mande index.html cuando haya error 404 historyApiFallback: true
//exact es para que no mande la otra ruta que contiene lo mismo
//Switch funciona como un case y y la ultima se mandaría cuando no encuentra ninguna Ruta
