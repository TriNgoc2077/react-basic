import {
	Button,
	Checkbox,
	Form,
	Input,
	notification,
	Row,
	Col,
	Divider,
} from "antd";
import { registerUserAPI } from "../services/api.service";
import { NavLink, useNavigate } from "react-router-dom";
const RegisterPage = () => {
	const [form] = Form.useForm();
	const navigate = useNavigate();

	const onFinish = async (values) => {
		console.log(values);
		const res = await registerUserAPI(
			values.fullName,
			values.email,
			values.password,
			values.phone
		);
		if (res.data) {
			notification.success({
				message: "Register user",
				description: "Đăng ký thành công",
			});
			navigate("/login");
		} else {
			notification.error({
				message: "Register user",
				description: JSON.stringify(res.message),
			});
		}
	};
	return (
		<Form
			form={form}
			layout="vertical"
			style={{ margin: "30px" }}
			onFinish={onFinish}
			// onFinishFailed={onFinishFailed}
		>
			<h3 style={{ textAlign: "center" }}>Đăng ký tài khoản</h3>
			<Row justify={"center"}>
				<Col xs={24} md={8}>
					<Form.Item
						label="Full Name"
						name="fullName"
						rules={[
							{
								required: true,
								message: "PLease input your name !",
							},
						]}
					>
						<Input></Input>
					</Form.Item>
				</Col>
			</Row>
			<Row justify={"center"}>
				<Col xs={24} md={8}>
					<Form.Item
						label="Email"
						name="email"
						rules={[
							{
								required: true,
								message: "PLease input your email !",
							},
						]}
					>
						<Input></Input>
					</Form.Item>
				</Col>
			</Row>
			<Row justify={"center"}>
				<Col xs={24} md={8}>
					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: "PLease input your password !",
							},
						]}
					>
						<Input.Password></Input.Password>
					</Form.Item>
				</Col>
			</Row>
			<Row justify={"center"}>
				<Col xs={24} md={8}>
					<Form.Item
						label="Phone number"
						name="phone"
						rules={[
							{
								required: true,
								pattern: new RegExp(/\d+/g),
								message: "Wrong format !",
							},
						]}
					>
						<Input></Input>
					</Form.Item>
				</Col>
			</Row>
			<Row justify={"center"}>
				<Col xs={24} md={8}>
					<Button type="primary" htmlType="submit">
						Register
					</Button>
					<Divider></Divider>
					<div>
						Đã có tài khoản ?{" "}
						<NavLink to="/login">Đăng nhập tại đây</NavLink>
					</div>
				</Col>
			</Row>
		</Form>
	);
};

export default RegisterPage;
