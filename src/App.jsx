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

const App = (props) => {
  return (
    <>
      <div className='container p-5'>
        <h3>Routing in React</h3>

        <BrowserRouter>
          <Navbar />
          <hr />
          <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/contact' exact component={Contact} />
            <DepartmentRoutes />

            <Route path='*' component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
