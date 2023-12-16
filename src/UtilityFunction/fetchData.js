const fitnessClubApi = process.env.REACT_APP_FITNESS_CLUB_API,
	username = process.env.REACT_APP_FITNESS_CLUB_USERNAME,
	password = process.env.REACT_APP_FITNESS_CLUB_PASSWORD;

export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': process.env.REACT_APP_EXERCISE_DB_API_KEY,
	},
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
		'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_SEARCH_RAPID_API_KEY,
	},
};

export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();

	return data;
};


export const fetchMyApiData = async (url) => {
	// const res = await fetch(`${fitnessClubApi}/api/${url}`);
	// const data = await res.json();
	// return data;

	// Send username and password in the as basic auth
	const res = await fetch(`${fitnessClubApi}/api/${url}`, {
		method: 'GET',
		headers: {
			'Authorization': 'Basic ' + btoa(username + ":" + password),
		}
	});
	const result = await res.json();


	console.log({ result });
	if (result.data) {
		result.data.forEach(exercise => {
			if (exercise.exerciseId) {
				exercise.gifUrl = `${fitnessClubApi}/api/exercises/${exercise.exerciseId}.gif`;
			}
		});
		return result.data;
	} else {
		if (result.exerciseId) {
			result.gifUrl = `${fitnessClubApi}/api/exercises/${result.exerciseId}.gif`;
		}
		console.log({ result });
		return result;
	}
}