import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Report from './components/Report';
import Info from './components/Info';
import DepartmentRoutes from './routes/DepartmentRoutes';
import PrimaryRoutes from './routes/PrimaryRoutes';


const App = (props) => {
  return (
    <>
      <div className='container p-5'>
        <h3>Routing in React</h3>

        <BrowserRouter>
          <Navbar />
          <hr />
          <PrimaryRoutes />

        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
