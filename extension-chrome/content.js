const site = window.location.href;


chrome.storage.local.get(["link", "trans", "ptrans", "horiz", "vert", "scale"], (result) => {
	const {link, trans, ptrans, horiz, vert, scale} = result;

	
	if(link && site.includes("docs.google.com/document/d")){
		background = document.querySelector("#kix-appview > div.kix-appview-editor-container > div");
		background.style.setProperty("background-image", "url("+link+")");
		background.style.setProperty("background-size", scale+"%");
		background.style.setProperty("background-position", horiz+"% "+vert+"%");
		page = document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-rotatingtilemanager.docs-ui-hit-region-surface")
		page.style.setProperty("opacity", ptrans, "important");
	}

		var jsInitChecktimer = setInterval (checkForJS_Finish, 10);
		function checkForJS_Finish () {
        		if (  document.querySelector("#kix-appview > div.left-sidebar-container.docs-ui-unprintable.left-sidebar-container-animation > div.left-sidebar-container-content > div.outline-refresh.docs-material.docs-floating-navigation-button.goog-inline-block.left-sidebar-container-content-child > div")  ) {
        			clearInterval (jsInitChecktimer);
        		
				button = document.querySelector("#kix-appview > div.left-sidebar-container.docs-ui-unprintable.left-sidebar-container-animation > div.left-sidebar-container-content > div.outline-refresh.docs-material.docs-floating-navigation-button.goog-inline-block.left-sidebar-container-content-child > div")
				sidebar = document.querySelector("#kix-appview > div.left-sidebar-container.docs-ui-unprintable.left-sidebar-container-animation > div.left-sidebar-container-content > div.navigation-widget.navigation-widget-unified-styling.docs-material.navigation-widget-floating-navigation-button.navigation-location-indicator.outline-refresh.navigation-widget-hoverable.left-sidebar-container-content-child")
				sidebar.style.setProperty("opacity", trans, "important");

			
				if(trans && site.includes("docs.google.com/document/d")){
					button.addEventListener("click", function (event) {
						sidebar = document.querySelector("#kix-appview > div.left-sidebar-container.docs-ui-unprintable.left-sidebar-container-animation > div.left-sidebar-container-content > div.navigation-widget.navigation-widget-unified-styling.docs-material.navigation-widget-floating-navigation-button.navigation-location-indicator.outline-refresh.navigation-widget-hoverable.left-sidebar-container-content-child")
						sidebar.style.setProperty("opacity", trans, "important");
	        			})
				}
			}
		}
})



chrome.storage.onChanged.addListener((changes, area) => {
	if(area == "local"){
chrome.storage.local.get(["link", "trans", "ptrans", "horiz", "vert", "scale"], (result) => {
	const {link, trans, ptrans, horiz, vert, scale} = result;

	
	if(link && site.includes("docs.google.com/document/d")){
		background = document.querySelector("#kix-appview > div.kix-appview-editor-container > div");
		background.style.setProperty("background-image", "url("+link+")");
		background.style.setProperty("background-size", scale+"%");
		background.style.setProperty("background-position", horiz+"% "+vert+"%");
		page = document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-rotatingtilemanager.docs-ui-hit-region-surface")
		page.style.setProperty("opacity", ptrans, "important");
	}

        		if (  document.querySelector("#kix-appview > div.left-sidebar-container.docs-ui-unprintable.left-sidebar-container-animation > div.left-sidebar-container-content > div.outline-refresh.docs-material.docs-floating-navigation-button.goog-inline-block.left-sidebar-container-content-child > div")  ) {

        		
				button = document.querySelector("#kix-appview > div.left-sidebar-container.docs-ui-unprintable.left-sidebar-container-animation > div.left-sidebar-container-content > div.outline-refresh.docs-material.docs-floating-navigation-button.goog-inline-block.left-sidebar-container-content-child > div")
				sidebar = document.querySelector("#kix-appview > div.left-sidebar-container.docs-ui-unprintable.left-sidebar-container-animation > div.left-sidebar-container-content > div.navigation-widget.navigation-widget-unified-styling.docs-material.navigation-widget-floating-navigation-button.navigation-location-indicator.outline-refresh.navigation-widget-hoverable.left-sidebar-container-content-child")
				sidebar.style.setProperty("opacity", trans, "important");

			
				if(trans && site.includes("docs.google.com/document/d")){
					button.addEventListener("click", function (event) {
						sidebar = document.querySelector("#kix-appview > div.left-sidebar-container.docs-ui-unprintable.left-sidebar-container-animation > div.left-sidebar-container-content > div.navigation-widget.navigation-widget-unified-styling.docs-material.navigation-widget-floating-navigation-button.navigation-location-indicator.outline-refresh.navigation-widget-hoverable.left-sidebar-container-content-child")
						sidebar.style.setProperty("opacity", trans, "important");
	        			})
				}

	}
})
}
})








