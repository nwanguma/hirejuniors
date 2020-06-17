import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from '../pages/about/About';
import Blog from '../pages/blog/Blog';
import Dashboard from '../pages/dashboard/Dashboard';
import Companies from '../pages/partners/Companies';
import Home from '../pages/home/Home';
import Job from '../pages/jobs/Job';
import Jobs from '../pages/jobs/Jobs';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import Profile from '../pages/profile/Profile';
import Signin from '../pages/signin/Signin.js';
import Signup from '../pages/signup/Signup.js';
import Talent from '../pages/talent/Developers';


export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/blog"><Blog /></Route>
        <Route path="/companies"><Companies /></Route>
        <Route path="/dashboard"><Dashboard /></Route>
        <Route path="/jobs"><Jobs /></Route>
        <Route path="/jobs/:id"><Job /></Route>
        <Route path="/profile"><Profile /></Route>
        <Route path="/signin"><Signin /></Route>
        <Route path="/signup"><Signup /></Route>
        <Route path="/talent"><Talent /></Route>
        <Route><NotFoundPage /></Route>
      </Switch>
    </BrowserRouter>
  )
}