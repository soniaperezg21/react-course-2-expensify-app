import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

//<Route path="/edit" component={EditExpensePage}>
//<Route path="/:id" component={EditExpensePage}/>
//</Route> 
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />   
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;


//Para que no de error la ruta  create (que no existe), hay que cambiar webpack.conf
//para decirle que se mande index.html cuando haya error 404 historyApiFallback: true
//exact es para que no mande la otra ruta que contiene lo mismo
//Switch funciona como un case y y la ultima se mandaría cuando no encuentra ninguna Ruta
