type PersonListProps = {
	names: {
		first: string;
		last: string;
	}[];
};

export const PersonList = (props: PersonListProps) => {
	return (
		<>
			{props.names.map((item) => {
				return (
					<div key={item.first}>
						{item.first} {item.last}
					</div>
				);
			})}
		</>
	);
};
