

window.mangas = {};
chrome.runtime.onMessage.addListener(function (request,sender,sendResponse){
	var i;
	var j;
	var splitURL;
	var uncap;
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
				uncap = splitURL[3][0].toLowerCase() + splitURL[3].substring(1,);
				window.mangas[uncap] = request.url;
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
					uncap = splitURL[4][0].toLowerCase() + splitURL[4].substring(1,);
					window.mangas[uncap] = request.url;
				}
			}	
		}
	}
	else if (request.url.includes("https://mangapark.net/")){
		// MANGAPARK.NET
		// splitURL returns ["https:", "", "mangapark.net", "manga", "king-killer-reborn", "i2629416", "c55", "1"]
		// splitURL[4] is the manga name and splitURL[6] is the chapter number
		// check if url is a chapter of a manga
		// if it is, add or update its bookmark
		if (splitURL[6]){
			uncap = splitURL[4][0].toLowerCase() + splitURL[4].substring(1,);
			window.mangas[uncap] = request.url;
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
				if (!isNaN(parseInt(splitURL2[2]))){
					// update bookmark link to chapter/page
					uncap = splitURL[5][0].toLowerCase() + splitURL[5].substring(1,);
					window.mangas[uncap] = request.url;
				}
			}	
		}
	}
	else if (request.url.includes("https://leviatanscans.com/")){
		// LEVIATANSCANS.COM
		// splitURL returns ["https:", "", "leviatanscans.com", "comics", "391190-max-level-returner", "1", "43"]
		// splitURL[4] is the manga name, splitURL[5] is the volume number, and splitURL[6] is the chapter number
		// check if url is a chapter of a manga
		// if it is, add or update its bookmark
		if (splitURL[5]){
			var anothersplitURL = splitURL[4].split("-");
			var mangaURLName = "";
			for (j = 1; j < anothersplitURL.length; j++){
				if (j === anothersplitURL.length - 1){
					mangaURLName = mangaURLName + anothersplitURL[j];
				}
				else{
					mangaURLName = mangaURLName + anothersplitURL[j] + "-";
				}
			}
			if(splitURL[6]){
				if (!isNaN(parseInt(splitURL[6]))){
					// update bookmark link to chapter/page
					uncap = mangaURLName[0].toLowerCase() + mangaURLName.substring(1,);
					window.mangas[uncap] = request.url;
				}
			}	
		}
	}
	else if (request.url.includes("https://mangasee123.com/")){
		// MANGASEE123.COM
		// splitURL returns ["https:", "", "mangasee123.com", "read-online", "A-Returners-Magic-Should-Be-Special-chapter-129-page-1.html"]
		// splitURL[4] is the manga name, chapter number, and page number
		// URLS
		// https://mangasee123.com/read-online/Tensei-Shitara-Slime-Datta-Ken-chapter-78-page-1.html
		// https://mangasee123.com/read-online/A-Returners-Magic-Should-Be-Special-chapter-129-page-1.html
		if (splitURL[4]){
			var splitURL2 = splitURL[4].split("-chapter-");
			if(splitURL2[1]){
				uncap = splitURL2[0][0].toLowerCase() + splitURL2[0].substring(1,);
				window.mangas[uncap] = request.url;
			}	
		}
	}
	else if (request.url.includes("https://www.mangahere.cc/")){
		// MANGAHERE.CC
		// splitURL returns ["https:", "", "www.mangahere.cc", "manga", "the_max_level_hero_has_returned", "c028", "1.html#ipg1"]
		// splitURL[4] is the manga name and splitURL[5] is the chapter number
		// URLS
		// https://www.mangahere.cc/manga/the_max_level_hero_has_returned/c028/1.html#ipg1
		// https://www.mangahere.cc/manga/furidashi_ni_ochiru/c018/1.html
		if (splitURL[5]){
			uncap = splitURL[4][0].toLowerCase() + splitURL[4].substring(1,);
			window.mangas[uncap] = request.url;
		}
	}
	else if (request.url.includes("https://merakiscans.com/")){
		// MERAKISCANS.COM
		// splitURL returns ["https:", "", "merakiscans.com", "manga", "the-last-human", "292", ""]
		// splitURL[4] is the manga name and splitURL[5] is the chapter number
		// URLS
		// https://merakiscans.com/manga/the-last-human/292/
		// https://merakiscans.com/manga/lang-huan-library/78/
		if (splitURL[5]){
			uncap = splitURL[4][0].toLowerCase() + splitURL[4].substring(1,);
			window.mangas[uncap] = request.url;
		}
	}
	else if (request.url.includes("https://w11.mangafreak.net/Read1_")){
		// W11.MANGAFREAK.NET
		// splitURL returns ["https:", "", "w11.mangafreak.net", "Read1_Mato_Seihei_No_Slave_51"]
		// splitURL[4] is the manga name and splitURL[5] is the chapter number
		// URLS
		// https://w11.mangafreak.net/Read1_Mato_Seihei_No_Slave_51
		// https://w11.mangafreak.net/Read1_Release_That_Witch_217
		var splitURL2 = request.url.split("Read1_");
		var splitURL3 = splitURL2[1].split("_");
		var mangaURLName  = '';
		for (j = 0; j < splitURL3.length - 1; j++){
			if (j === splitURL3.length - 2){
				mangaURLName = mangaURLName + splitURL3[j];
			}
			else{
				mangaURLName = mangaURLName + splitURL3[j] + '-';
			}
		}
		uncap = mangaURLName[0].toLowerCase() + mangaURLName.substring(1,);
		window.mangas[uncap] = request.url;
	}
	// else, do not add to manga list
	// console.log(splitURL);
	// console.log(request.url);
	console.log(window.mangas);
	
});


// USE THIS TO CHECK FOR SPLITURL
// var url = "https://leviatanscans.com/comics/391190-max-level-returner/1/43";
// var spliturl = url.split("/")
// console.log(spliturl);

// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.create({url: 'bookmarks.html'})
// })


chrome.browserAction.onClicked.addListener( function(){
	chrome.browserAction.setPopup("booksmarks.html");
})

