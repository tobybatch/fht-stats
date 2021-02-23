import './App.css';
import {Heading} from "@chakra-ui/react"
import {useEffect, useState} from "react";

function App() {
	const [playerData, setPlayerData] = useState([]);

	useEffect(() => {
		if (playerData.length === 0) {
			// async function getApiData() {
			// 	const response = await fetch("/api/server");
			// 	const data = await response.text();
			//
			// 	console.log("there", data);
			// 	setPlayerData(data);
			// }
			// getApiData();
			async function getApiData() {
				const data = await getServerSideProps();
			   	console.log("there", data);
			}
			getApiData();
		}
	}, []); // TODO What are deps? How to use them

	console.log("Here", playerData);
	return (
		<div className="App">
			<Heading>Stats</Heading>
			{/*{playerData.forEach((player, index) => (*/}
			{/*	<div key={index}>*/}
			{/*		<h3>{player.data.account.playerName}</h3>*/}
			{/*	</div>*/}
			{/*))}*/}
		</div>
	);

}export async function getServerSideProps() {
	var response = await fetch("http://localhost:3000/tracker")
	var players = await response.json()

	return players;
}

export default App;
