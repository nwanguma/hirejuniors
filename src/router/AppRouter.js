import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Blog from '../pages/blog/Blog';
import Jobs from '../pages/jobs/Jobs';
import Job from '../pages/jobs/Job';
import Dashboard from '../pages/dashboard/Dashboard';
import Profile from '../pages/profile/Profile';
import Talent from '../pages/talent/Developers';
import Companies from '../pages/partners/Companies';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import SignIn from '../pages/signIn/SignIn.js';
import SignUp from '../pages/signUp/SignUp.js';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/dashboard"><Dashboard /></Route>
        <Route path="/blog"><Blog /></Route>
        <Route path="/jobs"><Jobs /></Route>
        <Route path="/jobs/:id"><Job /></Route>
        <Route path="/profile"><Profile /></Route>
        <Route path="/talent"><Talent /></Route>
        <Route path="/signin"><SignIn /></Route>
        <Route path="/signup"><SignUp /></Route>
        <Route path="/companies"><Companies /></Route>
        <Route><NotFoundPage /></Route>
      </Switch>
    </BrowserRouter>
  )
}

