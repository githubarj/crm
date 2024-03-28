import { Button, Checkbox, Form, Input , Row, Col} from 'antd';
import useSwitchRoutes from '../../Hooks/useSwitchRoutes';
function LogIn() {
  return (
    <Form name='log-in' autoComplete='off' layout= "vertical" >
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
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input  placeholder='password' />
    </Form.Item>

    <Form.Item >
        <Form.Item name="remember" valuePropName="checked" noStyle  >
          <Checkbox style={{marginLeft:"10px"}} >Remember me</Checkbox >
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password?
        </a>
      </Form.Item>

      <Form.Item  >
        
        <Button type="primary" htmlType="submit" className="login-form-button" style={{width: "100%"}}   >
          Log in
        </Button>
        
        
      </Form.Item>

    </Form>
  )
}

export default LogIn
