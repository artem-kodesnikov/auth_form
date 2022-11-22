import React from 'react';
import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LoggedInRoute } from '../src/components/LoggedInRoute';
import { PageNotFound } from './pages/PageNotFound';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { ToastWrapper } from './components/ToastContainer';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          index
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/signIn'
          element={
            <LoggedInRoute>
              <SignInPage />
            </LoggedInRoute>
          }
        />
        <Route
          path='/signUp'
          element={
            <LoggedInRoute>
              <SignUpPage />
            </LoggedInRoute>
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <ToastWrapper />
    </>
  );
}

export default App;
