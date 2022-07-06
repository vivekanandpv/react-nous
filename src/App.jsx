import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const App = (props) => {
  return (
    <>
      <div className='container p-5'>
        <h3>Routing in React</h3>
        <hr />
        <BrowserRouter>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='*' component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
