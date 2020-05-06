import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';




const PrivateRoute = ({component:Conponent,roles,...rest})=> {

    return (
        <Route
            {...rest}
            render={props =>{
                    return <Conponent {...props} />
                }
            }
      />
    );
};

PrivateRoute.propTypes = {
    // component:PropTypes.element.isRequired,
    // roles:PropTypes.isRequired
};

export default PrivateRoute;