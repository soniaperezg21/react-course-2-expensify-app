import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

//Header a poner en todas las páginas (se puede usar link o navlink, navlink tiene exact y la clases)
export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is_active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is_active">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is_active">Help</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);