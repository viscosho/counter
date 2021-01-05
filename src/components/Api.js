const API_URL = `http://${window.location.hostname}:3001/api/v1/counter`;

export async function Api() {
	return fetch(API_URL, {
		headers: {
			'Content-Type': 'application/json',
			method: 'GET'
		}
	}).then((response) => {
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		return response.json();
	});
}
