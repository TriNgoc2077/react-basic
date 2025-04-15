import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { Menu } from "antd";
import {
	BookOutlined,
	HomeOutlined,
	SettingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { AuthContext } from "../context/auth.context";

const Header = () => {
	const [current, setCurrent] = useState("");

	const { user } = useContext(AuthContext);

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
		{
			label: "Cài đặt",
			key: "setting",
			icon: <SettingOutlined />,
			children: [
				{
					label: <NavLink to="/login">Đăng nhập</NavLink>,
					key: "login",
				},
				{
					label: "Đăng xuất",
					key: "logout",
				},
			],
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
