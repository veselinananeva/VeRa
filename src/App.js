import React, { Component } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';
import Students from './components/students/Students';
import AddStudent from './components/students/AddStudent';
import StudentList from './components/students/StudentList';
import HomeworkList from './components/homeworks/HomeworkList';
import AddHomework from './components/homeworks/AddHomework';
import SignIn from './components/auth/SignIn';
import AddTest from './components/tests/AddTest';
import TestList from './components/tests/TestList';
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
    const EditProfileComponent = () => (
      <Layout>
        <EditProfile />
      </Layout>
    )
    const StudentsComponent = () => (
      <Layout>
        <Students />
      </Layout>
    )
    const AddStudentComponent = () => (
      <Layout>
        <AddStudent />
      </Layout>
    )
    const StudentListComponent = () => (
      <Layout>
        <StudentList />
      </Layout>
    )
    const TestComponent = () => (
      <Layout>
        <AddTest />
      </Layout>
    )
    const TestListComponent = () => (
      <Layout>
        <TestList />
      </Layout>
    )
    const HomeworkListComponent = () => (
      <Layout>
        <HomeworkList />
      </Layout>
    )
    const AddHomeworkComponent = () => (
      <Layout>
        <AddHomework />
      </Layout>
    )
    const SignInComponent = () => (
     
        <SignIn />
      
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
        path: '/editprofile',
        exact: true,
        header: () => <Header/>,
        main: () => <EditProfileComponent />
      
      },
      {
        path: '/students',
        exact: true,
        header: () => <Header/>,
        main: () => <StudentsComponent />
      
      },
      {
        path: '/addstudent',
        exact: true,
        header: () => <Header/>,
        main: () => <AddStudentComponent />
      
      },
      {
        path: '/studentlist',
        exact: true,
        header: () => <Header/>,
        main: () => <StudentListComponent />
      
      },
      {
        path: '/addtest',
        exact: true,
        header: () => <Header/>,
        main: () => <TestComponent />
      
      },
      {
        path: '/tests',
        exact: true,
        header: () => <Header/>,
        main: () => <TestListComponent />
      
      },
      {
        path: '/homeworks',
        exact: true,
        header: () => <Header/>,
        main: () => <HomeworkListComponent />
      
      },
       {
        path: '/addhomework',
        exact: true,
        header: () => <Header/>,
        main: () => <AddHomeworkComponent />
      
      },
      {
        path: '/signin',
        exact: true,
        main: () => <SignInComponent />
      
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
