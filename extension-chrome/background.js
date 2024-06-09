chrome.runtime.onMessage.addListener(data => {
	const { event, prefs } = data
	switch (event) {
		case 'linkEntered':
			handleLinkEntered(prefs);
			break;
		case 'opacityEntered':
			handleOpacityEntered(prefs);
			break;
		case 'pageEntered':
			handlePageEntered(prefs);
			break;
		case 'horizChange':
			handleHorizChange(prefs);
			break;
		case 'vertChange':
			handleVertChange(prefs);
			break;
		case 'scaleChange':
			handleScaleChange(prefs);
			break;
		case 'resetSliders':
			handleResetSliders(prefs);
			break;
		default:
			break;
	}
})


const handleLinkEntered = (prefs) => {
	chrome.storage.local.set(prefs)
}

const handleOpacityEntered = (prefs) => {
	chrome.storage.local.set(prefs)
}

const handlePageEntered = (prefs) => {
	chrome.storage.local.set(prefs)
}

const handleHorizChange = (prefs) => {
	chrome.storage.local.set(prefs)
}

const handleVertChange = (prefs) => {
	chrome.storage.local.set(prefs)
}

const handleScaleChange = (prefs) => {
	chrome.storage.local.set(prefs)
}

const handleResetSliders = (prefs) => {
	chrome.storage.local.set(prefs)
}
















