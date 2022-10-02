type TanishkaProps = {
	herName: string;
	age: number;
};

export const Greet = (props: TanishkaProps) => {
	return (
		<h3>
			{props.herName} is {props.age} years old
		</h3>
	);
};
