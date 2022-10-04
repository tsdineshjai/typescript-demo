export type PersonListProps = {
	names: {
		first: string;
		last: string;
	}[];
};

export type StatusProps = {
	status: "loading" | "success" | "error";
};
