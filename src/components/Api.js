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

export async function IncreaseCounter(id) {
	const itemId = { id };
	const incUrl = `${API_URL}/inc`;
	//console.log(itemId);
	//console.log(`${API_URL}/inc`);
	return fetch(incUrl, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(itemId)
	});
}

export async function DecreaseCounter(id) {
	return fetch(`${API_URL}/dec`, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		data: { id }
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
