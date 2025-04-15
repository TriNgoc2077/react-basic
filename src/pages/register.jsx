import { Button, Checkbox, Form, Input, notification } from "antd";
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
			<div
				style={{
					margin: "50px",
					// display: "flex",
					// flexDirection: "column",
				}}
			>
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
				<Button type="primary" htmlType="submit">
					Register
				</Button>
				<Button
					onClick={() => {
						form.setFieldsValue({
							email: "tringoc@gmai.com",
						});
						console.log(form.getFieldsValue());
					}}
				>
					Test
				</Button>
			</div>
		</Form>
	);
};

export default RegisterPage;
