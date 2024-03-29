import { Form, Input, Button } from "antd";
import useSwitchRoutes from "../../../Components/Hooks/useSwitchRoutes";
import { FaAngleLeft } from "react-icons/fa6";
function ResetPassword() {
  return (
    <Form layout="vertical" >
      <Form.Item
      name="password"
      rules={
        [
          {required: true,
            message: "Enter a new password"
          }

        ]
      }
      >
        <Input.Password placeholder="New Password "/>

      </Form.Item>
      <Form.Item
      name="confirmPassword"
      rules={
        [
          {required: true,
            message: "Confirm your  password"
          }
        ]
      }
      >
        <Input.Password placeholder="Confirm Password"/>

      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit"style={{width: "100%"}}>Submit</Button>
      </Form.Item>
      <Form.Item >
        <Button   type="link" htmlType="button" onClick={useSwitchRoutes(-1)} className="back-to-login-btn"  >
       <FaAngleLeft /> Back to Login 
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ResetPassword
