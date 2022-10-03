type TanishkaProps = {
	herName: string;
	age: number;
	isLoggedIn: boolean;
};

export const Greet = (props: TanishkaProps) => {
	return props.isLoggedIn ? (
		<h3>
			{props.herName} is {props.age} years old
		</h3>
	) : (
		<h4>Welcome Unknown Guest</h4>
	);
};
