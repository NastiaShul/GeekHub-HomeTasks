import { Link} from "react-router-dom";
import logo from "../../../logo.svg"

import { Users } from "../Users/Users"

import "./Sidebar.css"

export const Sidebar = () => {
	return (
		<div className="sidebar">
			<Link className="link" to="/" reloadDocument>
				<img src={logo} alt="logo" className="sidebar-logo" />
			</Link>
			<nav className="sidebar-nav">
				<Users />
			</nav>
		</div>
	)
}