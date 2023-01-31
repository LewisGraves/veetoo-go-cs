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

// Character Actions
export const indexCharacters = () => {
	return fetch(`http://localhost:8000/characters`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const showCharacter = (id) => {
	return fetch(`http://localhost:8000/characters/${id}`, {
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

export const updateCharacter = (data, id) => {
	return fetch(`http://localhost:8000/characters/${id}`, {
		method: 'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`,
		},
		body: JSON.stringify(data),
	})
}

export const deleteCharacter = (id) => {
	return fetch(`http://localhost:8000/characters/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

// Campaign Actions
export const indexCampaign = () => {
	return fetch('http://localhost:8000/campaigns', {
		headers: {
			'Authorization': `Bearer ${store.userToken}`
		}
	})
}

export const showCampaign = (id) => {
	return fetch(`http://localhost:8000/campaigns/${id}`, {
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

export const updateCampaign = (data, id) => {
	return fetch(`http://localhost:8000/campaigns/${id}`, {
		method: 'PATCH',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${store.userToken}`,
		},
		body: JSON.stringify(data),
	})
}

export const deleteCampaign = (id) => {
	return fetch(`http://localhost:8000/campaigns/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}
