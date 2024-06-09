const linkIDElement = document.getElementById("link")
const transElement = document.getElementById("trans")
const pageElement = document.getElementById("page")

const submitElement = document.getElementById("submit")
const resetElement = document.getElementById("reset")

const horizontalpos = document.getElementById("horiz")
const verticalpos = document.getElementById("vert")
const imagescale = document.getElementById("scale")


resetElement.onclick = function () {

	horizontalpos.value = 50;
	verticalpos.value = 50;
	imagescale.value = 100;

	const prefs = {
		horiz: horizontalpos.value,
		vert: verticalpos.value,
		scale: imagescale.value
	}
	chrome.runtime.sendMessage({ event: 'resetSliders', prefs })
}

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
	if (horizontalpos.value) {
		const prefs = {
			horiz: horizontalpos.value
		}
		chrome.runtime.sendMessage({ event: 'horizChange', prefs })
	}
	if (verticalpos.value) {
		const prefs = {
			vert: verticalpos.value
		}
		chrome.runtime.sendMessage({ event: 'vertChange', prefs })
	}
	if(imagescale.value) {
		const prefs = {
			scale: imagescale.value
		}
		chrome.runtime.sendMessage({event: 'scaleChange', prefs})
	}
}


horizontalpos.addEventListener("change", function (event) {
	if(horizontalpos.value) {
		const prefs = {
			horiz: horizontalpos.value
		}
		chrome.runtime.sendMessage({event: 'horizChange', prefs})
	}
	else{}
});

verticalpos.addEventListener("change", function (event) {
	if(verticalpos.value) {
		const prefs = {
			vert: verticalpos.value
		}
		chrome.runtime.sendMessage({event: 'vertChange', prefs})
	}
	else{}
});

imagescale.addEventListener("change", function (event) {
	if(imagescale.value) {
		const prefs = {
			scale: imagescale.value
		}
		chrome.runtime.sendMessage({event: 'scaleChange', prefs})
	}
	else{}
});



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





chrome.storage.local.get(["link", "trans", "ptrans", "horiz", "vert", "scale"], (result) => {
	const {link, trans, ptrans, horiz, vert, scale} = result;
	if(link){
		linkIDElement.value = link
	}	
	if(trans){
		transElement.value = trans
	}
	if(ptrans){
		pageElement.value = ptrans
	}
	if(horiz){
		horizontalpos.value = horiz
	}
	if(vert){
		verticalpos.value = vert
	}
	if(scale){
		imagescale.value = scale
	}

})





























