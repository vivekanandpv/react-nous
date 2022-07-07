import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Report from '../components/Report';
import Info from '../components/Info';
import NotFound from '../components/NotFound';

const DepartmentRoutes = (props) => {
    let { path, url } =useRouteMatch();
    return (
        <>
            <Switch>
                <Route
                    path={`${path}/report/:year`}
                    exact
                    component={Report}
                />
                <Route path={`${path}/info`} exact component={Info}/>
                {/*
                    Since the route has already entered /department,
                    this component must handle the not found.
                    If the route doesn't match after /department,
                    it won't fall back to enclosing route
                */}
                <Route component={NotFound}/>
            </Switch>
        </>
    );
};

export default DepartmentRoutes;
