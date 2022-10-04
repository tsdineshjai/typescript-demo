type ContentProps = {
	children: string;
};

export const Content = (props: ContentProps) => {
	return <h3>{props.children}</h3>;
};
