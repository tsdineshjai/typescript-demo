type MvpPlayerProps = {
	styles: React.CSSProperties;
};

export const MvpPlayers = (props: MvpPlayerProps) => {
	return (
		<div>
			<h3>MVP's are Saka, Martinelli, Gabriel Jesus </h3>
			<h3 style={props.styles}>Super MVP is Saliba</h3>
		</div>
	);
};
