import React from 'react';
import { Link } from 'react-router-dom';


//<a href="/">Go home</a> va al server, con Link no   
const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;