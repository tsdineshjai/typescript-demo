import { useReducer } from "react";

const initialState = {
	count: 1,
};

type CountType = {
	count: number;
};

type ActionType = {
	type: string;
	payload: number;
};

function reducer(state: CountType, action: ActionType) {
	switch (action.type) {
		case "increment":
			return { count: state.count * action.payload };
		case "decrement":
			return { count: state.count - action.payload };
		default:
			return state;
	}
}

export const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<>
			<h5>Count :{state.count}</h5>
			<button onClick={() => dispatch({ type: "increment", payload: 5 })}>
				Click for multiplyBy5
			</button>
			<button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
				Click for decrementBy5
			</button>
		</>
	);
};
