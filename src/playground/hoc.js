//Higher Order Component (HOC) - A component that renders another component.  
//reuse code,   Render hijacking,  Abstract state

//example
import React from 'react';
import ReactDOM from 'react-dom';

//Es el Wrapped 
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info }</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
      <div>
          {props.isAdmin && <p>This is private info. Please dont't share!</p>}
          <WrappedComponent {...props} />  
      </div>
  );  
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
            <WrappedComponent {...props} />    
            ) : (
                <p>Please login in to view the info</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));

