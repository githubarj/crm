import { Button, Checkbox, Form, Input} from 'antd';
import useSwitchRoutes from '../../../Components/Hooks/useSwitchRoutes';
import AuthFooter from '../../../Components/Footers/AuthFooter';

function Register() {
  return (
    <Form name='register' autoComplete='off' layout= "vertical" >
      <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input  placeholder='username' />
    </Form.Item>
    <Form.Item
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
        {
          type: 'email',
          message: 'Please enter a valid email',
        },
      ]}
    >
      <Input  placeholder='Email' />
    </Form.Item>

      <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password  placeholder='password' />
    </Form.Item>

  
        <Form.Item name="remember" valuePropName="checked"   >
          <Checkbox >I agree to Privacy policy & terms</Checkbox >
        </Form.Item>
    

      <Form.Item  >
        <Button type="primary" htmlType="submit" className="login-form-button" style={{width: "100%"}}   >
          Log in
        </Button>
      </Form.Item>
      <Form.Item>
        Already have an account ?<Button type='link'  onClick={useSwitchRoutes("/")} >Sign in instead</Button>
      </Form.Item>
      <Form.Item>
      <AuthFooter />
      </Form.Item>
    </Form>
  )
}

export default Register
