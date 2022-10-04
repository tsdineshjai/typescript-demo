type StatusProps = {
	status: "loading" | "success" | "error";
};
export const Status = (props: StatusProps) => {
	let message;
	if (props.status === "loading") {
		message = "its loading...";
	} else if (props.status === "success") {
		message = "api was success, data was fetfched";
	} else if (props.status === "error") {
		message = "we have encountered an error, data fetching was unsuccessful";
	}
	return (
		<>
			<h2>status - {message}</h2>
		</>
	);
};
