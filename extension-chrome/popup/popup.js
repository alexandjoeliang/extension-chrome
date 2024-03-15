const linkIDElement = document.getElementById("link")
const transElement = document.getElementById("trans")
const pageElement = document.getElementById("page")
const submitElement = document.getElementById("submit")

submitElement.onclick = function () {
	if (linkIDElement.value) {
		const prefs = {
			link: linkIDElement.value
		}
		chrome.runtime.sendMessage({ event: 'linkEntered', prefs })
  	}
 	if (transElement.value) {
		const prefs = {
			trans: transElement.value
		}
		chrome.runtime.sendMessage({ event: 'opacityEntered', prefs })
	}
	if (pageElement.value) {
		const prefs = {
			ptrans: pageElement.value
		}
		chrome.runtime.sendMessage({ event: 'pageEntered', prefs })
	}
}


linkIDElement.addEventListener("keypress", function(event) {
  if (event.keyCode == 13 && linkIDElement.value) {
	const prefs = {
		link: linkIDElement.value

	}
	chrome.runtime.sendMessage({ event: 'linkEntered', prefs })

  }
  else {

  }
});

transElement.addEventListener("keypress", function(event) {
  if (event.keyCode == 13 && transElement.value) {
	const prefs = {
		trans: transElement.value
	}
	chrome.runtime.sendMessage({ event: 'opacityEntered', prefs })

  }
  else {

  }
});

pageElement.addEventListener("keypress", function(event) {
  if (event.keyCode == 13 && pageElement.value) {
	const prefs = {
		ptrans: pageElement.value
	}
	chrome.runtime.sendMessage({ event: 'pageEntered', prefs })

  }
  else {

  }
});


chrome.storage.local.get(["link", "trans", "ptrans"], (result) => {
	const {link, trans, ptrans} = result;
	if(link){
		linkIDElement.value = link
	}	
	if(trans){
		transElement.value = trans
	}
	if(ptrans){
		pageElement.value = ptrans
	}

})





























