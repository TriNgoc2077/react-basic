import "./components/todo/todo.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./services/api.service";
import { useContext, useEffect } from "react";
import { AuthContext } from "./components/context/auth.context";
import { Spin } from "antd";
const App = () => {
	const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);

	useEffect(() => {
		fetchUserInfo();
	}, []);
	// const delay = (miliSeconds) => {
	// 	return new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			resolve();
	// 		}, miliSeconds);
	// 	});
	// };
	const fetchUserInfo = async () => {
		const res = await getAccountAPI();
		// await delay(3500);
		if (res.data) {
			setUser(res.data.user);
		}
		setIsAppLoading(false);
	};
	return (
		<>
			{isAppLoading === true ? (
				<div
					style={{
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						backgroundColor: "#fff",
						padding: "24px 32px",
						borderRadius: "12px",
						boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "12px",
						zIndex: 9999,
					}}
				>
					<Spin size="large" />
					<div
						style={{
							fontSize: "16px",
							color: "#333",
							fontWeight: 500,
						}}
					>
						Loading...
					</div>
				</div>
			) : (
				<>
					{" "}
					<Header />
					<Outlet />
					<Footer />
				</>
			)}
		</>
	);
};

export default App;
