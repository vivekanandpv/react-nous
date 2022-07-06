import React from 'react';
import { Route } from 'react-router-dom';
import Report from '../components/Report';
import Info from '../components/Info';

const DepartmentRoutes = (props) => {
  return (
    <>
      <Route path='/department/report/:year' exact component={Report} />
      <Route path='/department/info' exact component={Info} />
    </>
  );
};

export default DepartmentRoutes;
