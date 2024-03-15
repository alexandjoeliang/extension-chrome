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



















