import React from "react";

import DashboardHome from "../pages/dashboard/DashboardHome.js";

const routes = [
  {
    path: "/dashboard",
    main: () => <DashboardHome />,
  },
];

export default routes;
