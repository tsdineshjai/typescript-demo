import "./App.css";
import { Button } from "./components/Button";
import { Content } from "./components/Content";
import { FavTeamInput } from "./components/FavTeamInput";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { PlayerOfMonth } from "./components/PlayerOfMonth";
import { Status } from "./components/Status";

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
			<Greet herName="D Tanishka Sri" isLoggedIn={true} />
			<Person fullname={name} />
			<PersonList names={nameList} />
			<Status status="success" />
			<Content> This is i am passing into this component as a children</Content>
			<PlayerOfMonth>
				<Content>Granit Xhaka is the player of the month of September</Content>
			</PlayerOfMonth>
			<Button
				handleClick={(event, id) =>
					console.log("button was clicked", event, id)
				}
			/>
			<FavTeamInput  />
		</div>
	);
}

export default App;
