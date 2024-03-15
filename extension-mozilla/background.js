browser.runtime.onMessage.addListener(data => {
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
	browser.storage.local.set(prefs)
}

const handleOpacityEntered = (prefs) => {
	browser.storage.local.set(prefs)
}

const handlePageEntered = (prefs) => {
	browser.storage.local.set(prefs)
}



















