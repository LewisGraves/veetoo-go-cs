import {
	indexCharacters,
	showCharacter,
	updateCharacter,
	deleteCharacter,
	indexCampaign,
	signUp,
	signIn,
	updateCampaign,
	showCampaign,
	deleteCampaign,
} from './api.js'
import {
	onIndexCharacterSuccess,
	onFailure,
	onShowCharacterSuccess,
	onUpdateCharacterSuccess,
	onDeleteCharacterSuccess,
	onSignUpSuccess,
	onSignInSuccess,
	onIndexCampaignSuccess,
	onUpdateCampaignSuccess,
	onShowCampaignSuccess,
	onDeleteCampaignSuccess,
} from './ui.js'

const indexCharactersContainer = document.querySelector('#index-character-container')
const indexCampaignContainer = document.querySelector('#index-campaign-container')
const showCharacterContainer = document.querySelector('#show-character-container')
const showCampaignContainer = document.querySelector('#show-campaign-container')
const signUpContainer = document.querySelector('#sign-up-form-container')
const signInContainer = document.querySelector('#sign-in-form-container')

// Character actions
indexCharactersContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	showCharacter(id)
		.then((res) => res.json())
		.then((res) => {
			onShowCharacterSuccess(res.character)
		})
		.catch(onFailure)
})

showCharacterContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const id = event.target.getAttribute('data-id')
	const characterData = {
		character: {
			firstName: event.target['firstName'].value,
			lastName: event.target['lastName'].value,
			strength: event.target['strength'].value,
			class: event.target['class'].value,
		},
	}
	updateCharacter(characterData, id)
		.then(onUpdateCharacterSuccess)
		.catch(onFailure)
})

showCharacterContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteCharacter(id)
		.then(onDeleteCharacterSuccess)
		.catch(onFailure)
})

// User Actions
signUpContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signUp(userData).then(onSignUpSuccess).catch(onFailure)
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
		.then(indexCampaign)
		.then((res) => res.json())
		.then((res) => onIndexCampaignSuccess(res.campaigns))
		.then(indexCharacters)
		.then((res) => res.json())
		.then((res) => onIndexCharacterSuccess(res.characters))
		.catch(onFailure)
})

// Campaign Actions
indexCampaignContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	showCampaign(id)
		.then((res) => res.json())
		.then((res) => {
			onShowCampaignSuccess(res.campaign)
		})
		.catch(onFailure)
})

showCampaignContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const id = event.target.getAttribute('data-id')
	const campaignData = {
		campaign: {
			name: event.target['name'].value
		},
	}
	updateCampaign(campaignData, id)
		.then(onUpdateCampaignSuccess)
		.catch(onFailure)
})

showCampaignContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteCampaign(id)
		.then(onDeleteCampaignSuccess)
		.catch(onFailure)
})