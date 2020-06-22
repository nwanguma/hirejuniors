import React from "react";

import Verification from "../pages/dashboard/Verification";
import Overview from "../pages/dashboard/Overview";
import Profile from "../pages/dashboard/Profile";
import Applications from "../pages/dashboard/Applications";
import Portfolio from "../pages/dashboard/Portfolio";
import Resources from "../pages/dashboard/Resources";
import Settings from "../pages/dashboard/Settings";

const routes = [
  {
    exact: true,
    path: "/dashboard/overview",
    main: () => <Overview />,
  },
  {
    path: "/dashboard/verification",
    main: () => <Verification />,
  },
  {
    path: "/dashboard/profile",
    main: () => <Profile />,
  },
  {
    path: "/dashboard/manage-applications",
    main: () => <Applications />,
  },
  {
    path: "/dashboard/portfolio",
    main: () => <Portfolio />,
  },
  {
    path: "/dashboard/resources",
    main: () => <Resources />,
  },
  {
    path: "/dashboard/settings",
    main: () => <Settings />,
  },
];

export default routes;
