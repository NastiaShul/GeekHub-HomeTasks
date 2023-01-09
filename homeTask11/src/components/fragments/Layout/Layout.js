import { Outlet } from "react-router-dom";

import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";

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