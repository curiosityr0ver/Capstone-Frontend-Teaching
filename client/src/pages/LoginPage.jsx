import { useState } from "react";
import { Login } from "../api/User";

function LoginPage() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const handleLogin = async () => {
		const response = await Login(email, password);
		console.log(response);
	};

	return (
		<div>
			<h1>Login</h1>
			<input
				type="email"
				placeholder="Email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
}

export default LoginPage;
