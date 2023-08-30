// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// function ProtectedRoute({ children, isLoggedIn }) {
//   return <Route>{isLoggedIn ? children : <Navigate to={'/saved-articles'} />}</Route>;
// }

// export default ProtectedRoute;

// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ isLoggedIn, children }) => {
//   if (!isLoggedIn) {
//     console.log('signup');
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn, children, ...props }) {
  return <Route {...props}>{isLoggedIn !== null ? children : <Navigate to="/" />}</Route>;
}

export default ProtectedRoute;
