import { store } from './store.js'

const indexCharactersContainer = document.querySelector('#index-character-container')
const messageContainer = document.querySelector('#message-container')
const showCharacterContainer = document.querySelector('#show-character-container')
const showCampaignContainer = document.querySelector('#show-campaign-container')
const authContainer = document.querySelector('#auth-container')
const indexContainer = document.querySelector('#index-container')
const indexCampaignsContainer = document.querySelector('#index-campaign-container')

// Character Actions
export const onIndexCharacterSuccess = (characters) => {
	characters.forEach((character) => {
		const div = document.createElement('div')
        div.classList.add('content-card')
		div.innerHTML = `
            <h3>${character.firstName} ${character.lastName}</h3>
            <button type="button" class="btn btn-primary" data-id="${character._id}">Show Character</button>
        `
		indexCharactersContainer.appendChild(div)
	})
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've encountered an error. Try again later</h3>
        <p>${error}</p>
    `
}

export const onShowCharacterSuccess = (character) => {
    indexContainer.classList.add('hide')
    showCharacterContainer.classList.remove('hide')
	const div = document.createElement('div')
	div.innerHTML = `
        <div class="row">
            <div class="col">
                <h2>Character</h2>
                <h3>${character.firstName} ${character.lastName}</h3>
                <p>${character.class}</p>
                <p>${character.strength}</p>
            </div>
            <div class="col">
                <form data-id="${character._id}">
                    <input class="form-control"class="form-control" type="text" name="firstName" value="${character.firstName}">
                    <input class="form-control" type="text" name="lastName" value="${character.lastName}">
                    <input class="form-control" type="text" name="class" value="${character.class}">
                    <input class="form-control" type="number" name="strength" value="${character.strength}">
                    <button type="submit" class="btn btn-warning">Update Character</button>
                </form>
                <button type="button" class="btn btn-danger" data-id="${character._id}">Delete Character</button>
            </div>
        </div>
    `
	showCharacterContainer.appendChild(div)
}

export const onUpdateCharacterSuccess = () => {
	messageContainer.innerHTML = 'You have updated a character'
}

export const onDeleteCharacterSuccess = () => {
	messageContainer.innerHTML = 'You have deleted a character'
}

// User Actions
export const onSignUpSuccess = () => {
    messageContainer.innerHTML = 'You\'ve created a new user! Now Sign In'
}

export const onSignInSuccess = (userToken) => {
    messageContainer.innerHTML = ''
    store.userToken = userToken
    authContainer.classList.add('hide')
    indexContainer.classList.remove('hide')
}

// Campaign Actions
export const onIndexCampaignSuccess = (campaigns) => {
    campaigns.forEach((campaign) => {
		const div = document.createElement('div')
        div.classList.add('content-card')
		div.innerHTML = `
            <h3>${campaign.name}</h3>
            <button type="button" class="btn btn-primary" data-id="${campaign._id}">Show Campaign</button>
        `
		indexCampaignsContainer.appendChild(div)
	})
}

export const onShowCampaignSuccess = (campaign) => {
	indexContainer.classList.add('hide')
	showCampaignContainer.classList.remove('hide')
	const div = document.createElement('div')
	div.innerHTML = `
        <div class="row">
            <div class="col">
                <h2>Campaign</h2>
                <h3>${campaign.name}</h3>
            </div>
            <div class="col">
                <form data-id="${campaign._id}">
                    <input class="form-control"class="form-control" type="text" name="name" value="${campaign.name}">
                    <button type="submit" class="btn btn-warning">Update Campaign</button>
                </form>
                <button type="button" class="btn btn-danger" data-id="${campaign._id}">Delete Campaign</button>
            </div>
        </div>
    `
	showCampaignContainer.appendChild(div)
}

export const onUpdateCampaignSuccess = () => {
	messageContainer.innerHTML = 'You have updated a campaign'
}

export const onDeleteCampaignSuccess = () => {
    messageContainer.innerHTML = 'You have deleted a campaign'
}