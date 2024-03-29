import { Form, Input, Button } from "antd";
import useSwitchRoutes from "../../../Components/Hooks/useSwitchRoutes";
import { FaAngleLeft } from "react-icons/fa6";

export default function ForgotPassword() {

  return (
    <Form layout="vertical" >
      <Form.Item
      name="email"
      rules={
        [
          {required: true,
            message: "Enter an email to reset your password"
          },
          {
            type : "email",
            message: "Enter a valid email adress"
          }

        ]
      }
      >
        <Input placeholder="Email"/>

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
