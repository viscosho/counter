const API_URL = `http://${window.location.hostname}:3001/api/v1/counter`;

// export async function GetCounterList() {
// 	return fetch(API_URL, {
// 		headers: {
// 			'Content-Type': 'application/json',
// 			method: 'GET'
// 		}
// 	}).then((response) => {
// 		if (!response.ok) {
// 			throw new Error(response.statusText);
// 		}
// 		return response.json();
// 	});
// }

export async function GetCounterList() {
	const response = await fetch(API_URL, {
		headers: {
			'Content-Type': 'application/json',
			method: 'GET'
		}
	});
	if (!response.ok) {
		const message = `An error has occurred: ${response.status}`;
		throw new Error(message);
	}
	const theList = await response.json();
	return theList;
}

export async function CreateCounter(title) {
	const itemTitle = { title };
	return fetch(API_URL, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(itemTitle)
	}).then((response) => {
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		return response;
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
	const itemId = { id };
	return fetch(API_URL, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'DELETE',
		body: JSON.stringify(itemId)
	});
}
