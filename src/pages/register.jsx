import { Button, Checkbox, Form, Input, notification, Row, Col } from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";
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
			// style={{ maxWidth: 600 }}
			onFinish={onFinish}
			// onFinishFailed={onFinishFailed}
		>
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
				</Col>
			</Row>
		</Form>
	);
};

export default RegisterPage;
