import React from 'react';
import { Navigate } from 'react-router-dom';

import { useUserAuth } from './../../context/userAuthContext';

const ProtectedRoute = ({ ProtectedComponent }) => {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to='/' />;
  }
  return ProtectedComponent;
};

export default ProtectedRoute;
