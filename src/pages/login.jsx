import { ArrowRightOutlined } from "@ant-design/icons";
import {
	Form,
	Input,
	Row,
	Col,
	Button,
	Divider,
	message,
	notification,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { NavLink } from "react-router-dom";
import { loginUserAPI } from "../services/api.service";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
	const [form] = useForm();
	const [loading, setLoading] = useState(false);
	const { setUser } = useContext(AuthContext);
	const navigate = useNavigate();
	const onFinish = async (values) => {
		setLoading(true);
		const res = await loginUserAPI(values.email, values.password);
		if (res.data) {
			message.success("Đăng nhập thành công !");
			localStorage.setItem("access_token", res.data.access_token);
			setUser(res.data.user);
			navigate("/");
		} else {
			notification.error({
				message: "Error Login",
				description: JSON.stringify(res.message),
			});
		}
		setLoading(false);
	};
	return (
		<Row justify={"center"} style={{ marginTop: "30px" }}>
			<Col xs={24} md={16} lg={8}>
				<fieldset
					style={{
						padding: "15px",
						margin: "5px",
						border: "1px solid #ccc",
						borderRadius: "5px",
					}}
				>
					<legend>Đăng nhập</legend>
					<Form form={form} layout="vertical" onFinish={onFinish}>
						<Form.Item
							label="Email"
							name="email"
							rules={[
								{
									required: true,
									message: "Please enter Email !",
								},
								{
									type: "email",
									message: "Email invalid !",
								},
							]}
						>
							<Input></Input>
						</Form.Item>
						<Form.Item
							label="Password"
							name="password"
							rules={[
								{
									required: true,
									message: "Please enter password !",
								},
							]}
						>
							<Input.Password></Input.Password>
						</Form.Item>
						<Form.Item>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Button
									type="primary"
									htmlType="submit"
									loading={loading}
								>
									Login
								</Button>
								<NavLink to="/">
									Trở về trang chủ
									<ArrowRightOutlined></ArrowRightOutlined>
								</NavLink>
							</div>
						</Form.Item>
					</Form>
					<div style={{ textAlign: "center" }}>
						<Divider></Divider>
						Chưa có tài khoản ?{" "}
						<NavLink to="/register">Đăng ký</NavLink>
					</div>
				</fieldset>
			</Col>
		</Row>
	);
};

export default LoginPage;
