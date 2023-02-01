import {
	createConsole,
	indexConsole,
	signUp,
	signIn,
	updateConsole,
	showConsole,
	deleteConsole,
} from './api.js'

import {
	onSignInSuccess,
	onIndexConsoleSuccess,
	onShowConsoleSuccess,
} from './ui.js'

const indexConsoleContainer = document.querySelector('#index-console-container')
const showConsoleContainer = document.querySelector('#show-console-container')
const signUpContainer = document.querySelector('#sign-up-form-container')
const signInContainer = document.querySelector('#sign-in-form-container')
const createConsoleContainer = document.querySelector('#create-console-form-container')

// User Actions
signUpContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signUp(userData)
})

signInContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signIn(userData)
		.then((res) => res.json())
		.then((res) => onSignInSuccess(res.token))
		.then(indexConsole)
		.then((res) => res.json())
		.then((res) => onIndexConsoleSuccess(res.consoles))
})

// Console Actions
indexConsoleContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	showConsole(id)
		.then((res) => res.json())
		.then((res) => {
			onShowConsoleSuccess(res.console)
		})
})

showConsoleContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const id = event.target.getAttribute('data-id')
	const consoleData = {
		console: {
			name: event.target['name'].value
		},
	}
	updateConsole(consoleData, id)
})

showConsoleContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')
	if (!id) return
	deleteConsole(id)
})

createConsoleContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const consoleData = {
		console: {
			name: event.target['name'].value,
		},
	}
	console.log(consoleData)
	createConsole(consoleData)
	
})