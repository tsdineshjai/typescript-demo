import { PersonListProps } from "./Person.types";

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
