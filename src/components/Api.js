const API_URL = `http://${window.location.hostname}:3001/api/v1/counter`;

export async function GetCounterList() {
	return fetch(API_URL, {
		headers: {
			'Content-Type': 'application/json',
			method: 'GET'
		}
	});
}

export async function CreateCounter(title) {
	const itemTitle = { title: 'virginia' };
	return fetch(API_URL, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(itemTitle)
	});
}

export async function OperationCounter(id, operation) {
	const itemId = { id };

	return fetch(`${API_URL}/${operation}`, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(itemId)
	});
}

export async function DeleteCounter(id) {
	return fetch(API_URL, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'DELETE',
		data: { id }
	});
}
