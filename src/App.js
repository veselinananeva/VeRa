import React, { Component } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Students from './components/students/Students';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import  Route  from 'react-router-dom/Route';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {   faEye } from '@fortawesome/free-solid-svg-icons'



import './App.css';
library.add( faEye);

    const HomeComponent = () => (
      <Layout>
        <Home />
      </Layout>
    )
    const ProfileComponent = () => (
      <Layout>
        <Profile />
      </Layout>
    )
    const StudentsComponent = () => (
      <Layout>
        <Students />
      </Layout>
    )

    const routes = [
      {
        path: '/',
        exact: true,
        header: () => <Header/>,
        main: () => <HomeComponent />
      },
      {
        path: '/profile',
        exact: true,
        header: () => <Header/>,
        main: () => <ProfileComponent />
      
      },
      {
        path: '/students',
        exact: true,
        header: () => <Header/>,
        main: () => <StudentsComponent />
      
      },
    ];

    const Layout = (props) => (
      <div>
        <Header />
        <div id="main">
          { props.children }
        </div>
        
      </div>
    )

  const AppRoute = () => (
      <Router>
        <Switch>
          {routes.map((route, i) => 
            <Route 
              exact 
              key={i} 
              path={route.path} 
              component={route.main} />)}
        </Switch>
      </Router> )

export default AppRoute;
