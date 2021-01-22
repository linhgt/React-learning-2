/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Login from "views/Login.jsx";
import HelloWorld from "views/HelloWorld.jsx";
import Forms from "views/Forms.jsx";
import UserCard from "components/UserCard/UserCard";
import UserList from "views/UserList.jsx";
import User from 'components/Users/User.jsx';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/helloworld",
    name: "Hello World",
    icon: "",
    component: HelloWorld,
    layout: "/admin"
  },
  {
    path: "/form",
    name: "Forms",
    icon: "",
    component: Forms,
    layout: "/admin"
  },
  {
    path: "/userslist",
    name: "Users List",
    icon: "",
    component: User,
    layout: "/admin"
  }
];

export default dashboardRoutes;
