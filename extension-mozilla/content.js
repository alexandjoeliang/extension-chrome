const site = window.location.href;


browser.storage.local.get(["link", "trans", "ptrans"], (result) => {
	const {link, trans, ptrans} = result;

	if(link && site.includes("docs.google.com/document/d")){
		background = document.querySelector("#kix-appview > div.kix-appview-editor-container > div");
		background.style.setProperty("background-image", "url("+link+")");
		background.style.setProperty("background-size", "cover");
		background.style.setProperty("background-position", "50% 50%");
		page = document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-rotatingtilemanager.docs-ui-hit-region-surface")
		page.style.setProperty("opacity", ptrans, "important");
	}


    var jsInitChecktimer = setInterval (checkForJS_Finish, 10);

    function checkForJS_Finish () {
        if (  document.querySelector(".docs-floating-navigation-button-outer-box")  ) {
            clearInterval (jsInitChecktimer);
            				button = document.querySelector(".docs-floating-navigation-button-outer-box")
				sidebar = document.querySelector(".navigation-widget")
				sidebar.style.setProperty("opacity", trans, "important");

			
				if(trans && site.includes("docs.google.com/document/d")){
					button.addEventListener("click", function (event) {
						sidebar.style.setProperty("opacity", trans, "important");
	        			})
				}
        }
    
}
			

})

browser.storage.onChanged.addListener((changes, area) => {
	if(area == "local"){

browser.storage.local.get(["link", "trans", "ptrans"], (result) => {
	const {link, trans, ptrans} = result;
	
	if(link && site.includes("docs.google.com/document/d")){
		background = document.querySelector("#kix-appview > div.kix-appview-editor-container > div");
		background.style.setProperty("background-image", "url("+link+")");
		background.style.setProperty("background-size", "cover");
		background.style.setProperty("background-position", "50% 50%");
		page = document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-rotatingtilemanager.docs-ui-hit-region-surface")
		page.style.setProperty("opacity", ptrans, "important");



				button = document.querySelector(".docs-floating-navigation-button-outer-box")
				sidebar = document.querySelector(".navigation-widget")
				sidebar.style.setProperty("opacity", trans, "important");


				if(trans && site.includes("docs.google.com/document/d")){

					button.addEventListener("click", function (event) {

						sidebar.style.setProperty("opacity", trans, "important");
	        			})
				}
			
	}
})



	
	}
})

























