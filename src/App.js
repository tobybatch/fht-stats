import './App.css';
import axios from "axios";
// const axios = require('axios');

async function App() {
	const FETCH_URL = "https://api.tracker.gg/api/v1/bfv/profile/%s/%s";

	const url = FETCH_URL + "/psn/ID_SPARTA";

	const data = await axios.get(url);
		// .then(function (response) {
		// 	console.log(response);
		// })
		// .catch(function (error) {
		// 	console.log(error);
		// });

	console.log(data);

	return (
		<div className="App">
			xxx
		</div>
	);
}

export default App;
