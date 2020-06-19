import React from "react";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Dashboard from "../pages/dashboard/Dashboard";
import Companies from "../pages/partners/Companies";
import Job from "../pages/jobs/Job";
import Jobs from "../pages/jobs/Jobs";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import Profile from "../pages/profile/Profile";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import Talent from "../pages/talent/Developers";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/about",
    main: () => <About />,
  },
  {
    path: "/blog",
    main: () => <Blog />,
  },
  {
    path: "/developer-dashboard",
    main: () => <Dashboard />,
  },
  {
    path: "/companies",
    main: () => <Companies />,
  },
  {
    path: "/job",
    main: () => <Job />,
  },
  {
    path: "/jobs",
    main: () => <Jobs />,
  },
  {
    path: "/*",
    main: () => <NotFoundPage />,
  },
  {
    path: "/profile",
    main: () => <Profile />,
  },
  {
    path: "/sign-in",
    main: () => <SignIn />,
  },
  {
    path: "/sign-up",
    main: () => <SignUp />,
  },
  {
    path: "/talent",
    main: () => <Talent />,
  },
];

export default routes;
