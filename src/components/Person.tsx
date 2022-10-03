type PersonProps = {
	fullname: {
		firstName: string;
		lastName: string;
	};
};

export const Person = (props: PersonProps) => {
	return (
		<h5>
			{props.fullname.firstName} {props.fullname.lastName}
		</h5>
	);
};
