import { store } from './store.js'

const showConsoleContainer = document.querySelector('#show-console-container')
const authContainer = document.querySelector('#auth-container')
const indexContainer = document.querySelector('#index-container')
const indexConsolesContainer = document.querySelector('#index-console-container')


// // User Actions
export const onSignInSuccess = (userToken) => {
    store.userToken = userToken
    authContainer.classList.add('hide')
    indexContainer.classList.remove('hide')
}

// Console Actions
export const onIndexConsoleSuccess = (consoles) => {
    consoles.forEach((console) => {
		const div = document.createElement('div')
        div.classList.add('content-card')
		div.innerHTML = `
            <h3>${console.name}</h3>
            <img src="${console.image}" alt="${console.name}">
            <button type="button" class="btn btn-primary" data-id="${console._id}">Show Console</button>
        `
		indexConsolesContainer.appendChild(div)
	})
}


export const onShowConsoleSuccess = (console) => {
	indexContainer.classList.add('hide')
	showConsoleContainer.classList.remove('hide')
	const div = document.createElement('div')
	div.innerHTML = `
        <div class="row">
            <div class="col">
                <h2>Console</h2>
                <h3>${console.name}</h3>
                <img src="${console.image}" alt="${console.name}">
                <p>Model:${console.model}</p>
                <p>Manufacturer:${console.manufacturer}</p>
                <p>Generation:${console.generation}</p>
                <p>Release Date:${console.releaseDate}</p>
                <p>Region:${console.region}</p>
                <p>Backwards Compatability:${console.backwardsCompatibility}</p>
                <p>Condition:${console.working}</p>
                <p>Games:${JSON.stringify(console.games)}</p>

            </div>
            <div class="col">
                <form data-id="${console._id}">
                    <input class="form-control" type="text" name="name" value="name">
                    <input class="form-control" type="text" name="image" value="image url">
                    <input class="form-control" type="text" name="model" value="model">
                    <input class="form-control" type="text" name="manufacturer" value="manufacturer">
                    <input class="form-control" type="text" name="generation" value="generation">
                    <input class="form-control" type="text" name="releaseDate" value="release date">
                    <input class="form-control" type="text" name="region" value="region">
                    <input class="form-control" type="text" name="backwards ompatibility" value="backwards compatibility">
                    <input class="form-control" type="text" name="working" value="working?">
                    <button type="submit" class="btn btn-warning">Update Console</button>
                </form>
                <button type="button" class="btn btn-danger" data-id="${console._id}">Delete Console</button>
            </div>
        </div>
    `
	showConsoleContainer.appendChild(div)
}