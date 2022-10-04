import { useState } from "react";
type AuthUser = {
	name: string;
	email: string;
};
export const UserAuth = () => {
	const [isLoggedIn, setisLoggedIn] = useState<AuthUser | null>(null);
	//here we are mentioning the value can be either null or AuthUser type
	//The reason initial state is null and handleloguout function is null becoz
	//intial state and logout state should be empty and shouldnt contain any data
	const handleLogin = () => {
		setisLoggedIn({
			name: "tanishka sri",
			email: "tanishkasri@gmail.com",
		});
	};
	const handleLogout = () => {
		setisLoggedIn(null);
  	};

	return (
		<>
			<button onClick={handleLogin}>Log In</button>
			<button onClick={handleLogout}>Log Out</button>

			<span>The user name is {isLoggedIn?.name}</span>
			{/* optional chain operator checks if the value is a valid, if not it returns undefined rather than showing error*/}
			{/* one more reason is inital value is null, if you dont use it, it will show an error */}
			<span>The user mail is {isLoggedIn?.email}</span>
		</>
	);
};
