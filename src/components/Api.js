const API_URL = `http://${window.location.hostname}:3001/api/v1/counter`;

export async function GetCounterList() {
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

export async function CreateCounter(title) {
	return fetch(API_URL, {
		headers: {
			'Content-Type': 'application/json',
			method: 'POST',
			data: { title }
		}
	});
}

export async function IncreaseCounter(id) {
	return fetch(`${API_URL}/inc`, {
		headers: {
			'Content-Type': 'application/json',
			method: 'POST',
			data: { id }
		}
	});
}

export async function DecreaseCounter(id) {
	return fetch(`${API_URL}/dec`, {
		headers: {
			'Content-Type': 'application/json',
			method: 'POST',
			data: { id }
		}
	});
}

export async function DeleteCounter(id) {
	return fetch(API_URL, {
		headers: {
			'Content-Type': 'application/json',
			method: 'DELETE',
			data: { id }
		}
	});
}
