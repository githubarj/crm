import { Divider } from "antd";
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

function AuthFooter() {
	return (
		<div className="auth-footer">
			<Divider plain>or</Divider>
			<div className="auth-footer-icons">
				<a href="">
					<FaFacebookF />
				</a>
				<a href="">
					<FaTwitter />
				</a>
				<a href="">
					<FaGithub />
				</a>
				<a href="">
					<FaGoogle />
				</a>
			</div>
		</div>
	);
}

export default AuthFooter;
