import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';
import DepartmentRoutes from './DepartmentRoutes';

const PrimaryRoutes = (props) => {
  return (
    <>
        <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/department'>
                <DepartmentRoutes />
            </Route>
            <Route component={NotFound} />
        </Switch>
    </>
  );
};

export default PrimaryRoutes;
