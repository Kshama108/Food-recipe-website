import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const auth = localStorage.getItem('Auth') === 'true';

  return auth ? <Component {...rest} /> : <Navigate to='/login' />;
};

export default PrivateRoute