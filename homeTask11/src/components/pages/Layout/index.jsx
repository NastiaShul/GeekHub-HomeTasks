import { Outlet } from "react-router-dom";

import { Sidebar, Header } from "../../fragments";

import "./Layout.css";

export const Layout = () => {
   return (
      <div className="flex">
         <Sidebar />
         <div className="layout-main">
            <Header />
            <Outlet />
         </div>
      </div>
   )
}