import React, { useState } from "react";

export const FavTeamInput = () => {
	const [team, setTeam] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setTeam(e.target.value);

	return (
		<div>
			<label htmlFor="favTeam">Enter you fav team</label>
			<input onChange={handleChange} type="text" value={team} id="favTeam" />
		</div>
	);
};
