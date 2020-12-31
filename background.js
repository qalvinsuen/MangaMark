

window.mangas = {};
chrome.runtime.onMessage.addListener(function (request,sender,sendResponse){
	var i;
	var splitURL;
	// var size = Object.keys(mangas).length;
	
	splitURL = request.url.split("/");

	if (request.url.includes("https://www.mangareader.net/")){
		// MANGAREADER.NET
		// splitURL returns ["https:", "", "www.mangareader.net", "tate-no-yuusha-no-nariagari", "71"]
		// splitURL[3] is the manga name and splitURL[4] is the chapter number
		// check if url is a chapter of a manga
		// if it is, add or update its bookmark
		if(splitURL[4]){
			// checks if splitURL[4] is a chapter number
			if (!isNaN(parseInt(splitURL[4]))){
				// update bookmark link to chapter/page
				window.mangas[splitURL[3]] = request.url;
			}
		}	
	}
	else if (request.url.includes("https://mangahub.io/")){
		// MANGAHUB.IO
		// splitURL returns ["https:", "", "mangahub.io", "chapter", "supreme-mad-emperor-system", "chapter-65"]
		// splitURL[4] is the manga name and splitURL[5] is the chapter number
		// check if url is a chapter of a manga
		// if it is, add or update its bookmark
		if (splitURL[5]){
			var splitURL2 = splitURL[5].split("-");
			if(splitURL2[1]){
				// checks if splitURL[4] is a chapter number
				if (!isNaN(parseInt(splitURL2[1]))){
					// update bookmark link to chapter/page
					window.mangas[splitURL[4]] = request.url;
				}
			}	
		}
	}
	else if (request.url.includes("https://mangapark.net/")){
		// MANGAPARK.N
		// splitURL returns ["https:", "", "mangapark.net", "manga", "king-killer-reborn", "i2629416", "c55", "1"]
		// splitURL[4] is the manga name and splitURL[6] is the chapter number
		// check if url is a chapter of a manga
		// if it is, add or update its bookmark
		if (splitURL[6]){
			window.mangas[splitURL[4]] = request.url;
		}
	}
	else if (request.url.includes("https://www.webtoons.com/")){
		// WEBTOONS.COM
		// splitURL returns ["https:", "", "www.webtoons.com", "en", "action", "eleceed", "episode-88", "viewer?title_no=1571&amp;episode_no=88"]
		// splitURL[5] is the manga name and splitURL[6] is the chapter number (splitURL[4] is the genre)
		// check if url is a chapter of a manga
		// if it is, add or update its bookmark
		// URL examples:
		// https://www.webtoons.com/en/action/eleceed/episode-88/viewer?title_no=1571&episode_no=88
		// https://www.webtoons.com/en/thriller/not-even-bones/ep-62-season-1-finale/viewer?title_no=1756&episode_no=62
		// https://www.webtoons.com/en/comedy/mage-and-demon-queen/s2-episode-50/viewer?title_no=1438&episode_no=123
		// use splitURL[8] for consistency since splitURL[6] can vary
		if (splitURL[7]){
			var splitURL2 = splitURL[7].split("=");
			if(splitURL2[2]){
				// checks if splitURL[4] is a chapter number
				if (!isNaN(parseInt(splitURL2[2]))){
					// update bookmark link to chapter/page
					window.mangas[splitURL[5]] = request.url;
				}
			}	
		}
	}
	// else, do not add to manga list
	console.log(splitURL);
	console.log(request.url);
	console.log(window.mangas);
	
});



// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.create({url: 'bookmarks.html'})
// })


chrome.browserAction.onClicked.addListener( function(){
	chrome.browserAction.setPopup("booksmarks.html");
})

