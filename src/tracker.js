// const FETCH_URL = "https://api.tracker.gg/api/v1/bfv/profile/%s/%s";
import {readdir, readFileSync} from "fs";

const FIXTURES = "./fixtures";

export default (req, res) => {
	res.statusCode = 200
	console.log("GGGG");

	const data = [];

	// list all files in the directory
	readdir(FIXTURES, (err, files) => {
		if (err) {
			throw err;
		}

		// files object contains all files names
		// log them on console
		files.forEach(file => {
			const rawData = Promise.all(readFileSync(file));
			const json = JSON.parse(rawData);
			data.push(json);
		});
	});
	res.json(data)
}
