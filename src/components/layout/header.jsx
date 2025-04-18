import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, NavLink, useLocation } from "react-router-dom";
import "./header.css";
import { Menu, message } from "antd";
import {
	BookOutlined,
	HomeOutlined,
	LoginOutlined,
	SettingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { AuthContext } from "../context/auth.context";
import { SpaceContext } from "antd/es/space";
import { logoutAPI } from "../../services/api.service";

const Header = () => {
	const [current, setCurrent] = useState("");
	const { user, setUser } = useContext(AuthContext);
	const location = useLocation();

	useEffect(() => {
		const allRoutes = ["users", "books"];
		const currentRoute = allRoutes.find(
			(item) => `/${item}` === location.pathname
		);
		if (currentRoute) {
			setCurrent(currentRoute);
		} else {
			setCurrent("home");
		}
	});

	const onClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
	};
	const handleLogout = async () => {
		const res = await logoutAPI();
		if (res.data) {
			localStorage.removeItem("access_token");
			setUser({
				id: "",
				email: "",
				phone: "",
				fullName: "",
				role: "",
				avatar: "",
			});
			message.success("Đăng xuất thành công !");
			Navigate("/");
		}
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
								label: (
									<span onClick={handleLogout}>
										Đăng xuất
									</span>
								),
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
