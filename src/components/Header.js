import React from 'react';
import { NavLink } from 'react-router-dom'

//Header a poner en todas las páginas (se puede usar link o navlink, navlink tiene exact y la clases)
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is_active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is_active">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is_active">Help</NavLink>
    </header>
);

export default Header;