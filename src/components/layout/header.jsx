import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
	return (
		<header className="header">
			<nav className="nav-container">
				<div className="logo">
					<Link to="/">Logo</Link>
				</div>
				<ul className="nav-links">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/users">Users</NavLink>
					</li>
					<li>
						<NavLink to="/books">Books</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
