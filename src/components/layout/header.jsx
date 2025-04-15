import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { Menu } from "antd";
import {
	BookOutlined,
	HomeOutlined,
	LoginOutlined,
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
		...(!user.id
			? [
					{
						label: <NavLink to={"/login"}>Đăng nhập</NavLink>,
						key: "login",
						icon: <LoginOutlined></LoginOutlined>,
					},
			  ]
			: []),
		...(user.id
			? [
					{
						label: `Welcome ${user.fullName}`,
						key: "stting",
						icon: <SettingOutlined />,
						children: [
							{
								label: "Đăng xuất",
								key: "logout",
							},
						],
					},
			  ]
			: []),
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
