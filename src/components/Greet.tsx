type TanishkaProps = {
	herName: string;
	age?: number;
	isLoggedIn: boolean;
};

export const Greet = (props: TanishkaProps) => {
	const { age = 3 } = props;
	return props.isLoggedIn ? (
		<h3>
			{props.herName} is {age} years old
		</h3>
	) : (
		<h4>Welcome Unknown Guest</h4>
	);
};
