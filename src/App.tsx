import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
	const name = {
		firstName: "Mikel",
		lastName: "Arteta",
	};

	const nameList = [
		{ first: "mark", last: "boucher" },
		{ first: "maalexrk", last: "boucscandiher" },
		{ first: "fabian", last: "schulz" },
	];
	return (
		<div className="App">
			<Greet herName="D Tanishka Sri" age={3} isLoggedIn={false} />
			<Person fullname={name} />
			<PersonList names={nameList} />
		</div>
	);
}

export default App;
