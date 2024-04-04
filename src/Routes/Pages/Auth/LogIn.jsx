import { Button, Checkbox, Form, Input } from "antd";
import useSwitchRoutes from "../../../Components/Hooks/useSwitchRoutes";
import AuthFooter from "../../../Components/Auth/AuthFooter";
function LogIn() {
	return (
		<Form name="log-in" autoComplete="off" layout="vertical">
			<Form.Item
				name="username"
				rules={[
					{
						required: true,
						message: "Please input your username!",
					},
				]}
			>
				<Input placeholder="username" />
			</Form.Item>

			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: "Please input your password!",
					},
				]}
			>
				<Input.Password placeholder="password" />
			</Form.Item>

			<Form.Item className="form-checkbox-forgot">
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox style={{ marginLeft: "10px" }}>Remember me</Checkbox>
				</Form.Item>

				<Button type="link" onClick={useSwitchRoutes("forgot")}>
					Forgot password?
				</Button>
			</Form.Item>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					className="login-form-button"
					style={{ width: "100%" }}
				>
					Log in
				</Button>
			</Form.Item>
			<Form.Item>
				New to our platform ?
				<Button type="link" onClick={useSwitchRoutes("register")}>
					Create an account
				</Button>
			</Form.Item>
			<Form.Item>
				<AuthFooter />
			</Form.Item>
		</Form>
	);
}

export default LogIn;
