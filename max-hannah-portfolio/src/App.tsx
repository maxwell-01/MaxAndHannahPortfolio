import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './features/home-page/Home';
import { About } from './features/home-page/About';
import { Project } from './features/home-page/Project';
import { NotFound } from './features/NotFound';
import { Layout } from './features/home-page/Layout';
import { Login } from './features/home-page/Login';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/projects'}>
            <Route index element={<Navigate to={'/'} />} />
            <Route path={':projectId'} element={<Project />} />
          </Route>
          <Route path={'*'} element={<NotFound />} />
        </Route>
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </>
  );
};
