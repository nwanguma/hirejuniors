import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Blog from '../pages/blog/Blog';
import Jobs from '../pages/jobs/Jobs';
import JobItem from '../pages/jobs/JobItem';
import Dashboard from '../pages/dashboard/Dashboard';
import CreateProfile from '../pages/create/Create';
import EditProfile from '../pages/edit/Edit';
import Post from '../pages/post/Post';
import Developers from '../pages/developers/Developers';
import Companies from '../pages/companies/Companies';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import SignIn from '../pages/signIn/SignIn.js';
import SignUp from '../pages/signUp/SignUp.js';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/dashboard"><Dashboard /></Route>
        <Route path="/createprofile"><CreateProfile /></Route>
        <Route path="/editprofile"><EditProfile /></Route>
        <Route path="/blog"><Blog /></Route>
        <Route path="/jobs"><Jobs /></Route>
        <Route path="/jobitem"><JobItem /></Route>
        <Route path="/post"><Post /></Route>
        <Route path="/developers"><Developers /></Route>
        <Route path="/signin"><SignIn /></Route>
        <Route path="/signup"><SignUp /></Route>
        <Route path="/companies"><Companies /></Route>
        <Route><NotFoundPage /></Route>
      </Switch>
    </BrowserRouter>
  )
}

