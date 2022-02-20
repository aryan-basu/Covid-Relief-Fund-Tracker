import Navbar from './components/UIComponents/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//* Component Imports ////////////////////////////////////////////
import HomePage from './pages/HomePage';
import UserDashboard from './pages/UserDashboard';
// import AdminDashboard from './pages/AdminDashboard';
import AboutPage from './pages/AboutPage';

import ProtectedRoute from './components/Utils/ProtectedRoute';
import UnprotectedRoute from './components/Utils/UnprotectedRoute';

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <UnprotectedRoute UnprotectedComponent={<HomePage />} />
            }></Route>
          <Route
            exact
            path='/about'
            element={
              <UnprotectedRoute UnprotectedComponent={<AboutPage />} />
            }></Route>

          <Route
            exact
            path='/user'
            element={
              <ProtectedRoute ProtectedComponent={<UserDashboard />} />
            }></Route>

          {/* <Route exact path='/admin' element={<AdminDashboard />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
