import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { Menu } from "antd";
import { BookOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";

const Header = () => {
	const [current, setCurrent] = useState("");
	const onClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
	};
	const items = [
		{
			label: <Link to="/">Home</Link>,
			key: "home",
			icon: <HomeOutlined />,
		},
		{
			label: <Link to="/users">Users</Link>,
			key: "users",
			icon: <UserOutlined />,
		},
		{
			label: <Link to="/books">Books</Link>,
			key: "books",
			icon: <BookOutlined />,
		},
	];
	return (
		<Menu
			onClick={onClick}
			selectedKeys={[current]}
			mode="horizontal"
			items={items}
		/>
	);
};

export default Header;
