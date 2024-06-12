import { useState } from "react";
import { Register } from "../api/User";

function RegisterPage() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [mobile, setMobile] = useState();
	const [password, setPassword] = useState();

	const handleRegister = async () => {
		const response = await Register(name, email, mobile, password);
		console.log(response);
	};

	return (
		<div>
			<h1>Login</h1>
			<input
				type="text"
				placeholder="Name"
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="email"
				placeholder="Email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Mobile"
				onChange={(e) => setMobile(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleRegister}>Register</button>
		</div>
	);
}

export default RegisterPage;
