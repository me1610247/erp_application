import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import UsersReg from "pages/UsersReg";
import UserReg from "pages/UserReg";
import UsersRegOne from "pages/UsersRegOne";
import Checklisthistory from "pages/Checklisthistory";
import OrgRegPage from "pages/OrgReg";
import RevList from "pages/ReviewList";
import ChecklistDetails from "pages/checkListDetails/checkListDetails";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "login",
      element: <Login />},{
      path: "logout",
      element: <Login />,
    },
    {
      path: "usersreg",
      element: <UsersReg />
    },
    {
      path: "new-user",
      element: <UsersReg />,
    },
    {
      path: "userreg",
      element: <UserReg />,
     
    },
    {
      path: "usersregone",
      element: <UsersRegOne />,
    },
    {
      path: "checklisthistory",
      element: <Checklisthistory />
    },
    {
      path: "details",
      element: <ChecklistDetails />
    },
    {
      path: "list-dates",
      element: <Checklisthistory />,
    },
    {
      path: "new-organization",
      element: <OrgRegPage/>,
    },
    {
      path: "orgreg",
      element: <OrgRegPage/>,
    },
    {
      path: "add-review-list",
      element: <RevList/>,
    },

  ]);

  return element;
};

export default ProjectRoutes;
