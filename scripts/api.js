import { store } from './store.js'

// User actions
export const signUp = (data) => {
	return fetch(`http://localhost:8000/sign-up`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

export const signIn = (data) => {
	return fetch(`http://localhost:8000/sign-in`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

// Console Actions
export const indexConsole = () => {
	return fetch('http://localhost:8000/consoles', {
		headers: {
			'Authorization': `Bearer ${store.userToken}`
		}
	})
}

export const showConsole = (id) => {
	return fetch(`http://localhost:8000/consoles/${id}`, {
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

export const updateConsole = (data, id) => {
	return fetch(`http://localhost:8000/consoles/${id}`, {
		method: 'PATCH',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${store.userToken}`,
		},
		body: JSON.stringify(data),
	})
}

export const deleteConsole = (id) => {
	return fetch(`http://localhost:8000/consoles/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

export const createConsole = (data) => {
	return fetch('http://localhost:8000/consoles', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`,
		},
		body: JSON.stringify(data),
	})
}