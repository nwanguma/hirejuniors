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
import Developers  from '../pages/developers/Developers';
import Companies  from '../pages/companies/Companies';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/dashboard"><Dashboard /></Route>
        <Route path="/createProfile"><CreateProfile /></Route>
        <Route path="/editProfile"><EditProfile /></Route>        
        <Route path="/blog"><Blog /></Route>
        <Route path="/jobs"><Jobs /></Route>
        <Route path="/jobitem"><JobItem /></Route>        
        <Route path="/post"><Post /></Route>
        <Route path="/developers"><Developers /></Route>   
        <Route path="/companies"><Companies /></Route>                     
        <Route><NotFoundPage /></Route>
      </Switch>
    </BrowserRouter>
  )
}

