


function insertNames(mangaDictionary){
	var bookmark;
	var splitName;
	var mangaName;
	var splitURL;
	var i;
	var breakLine = document.createElement('br');
	var size = Object.keys(mangaDictionary).length;
	if (size === 0){
		document.body.appendChild(breakLine);
		// breakLine = document.createElement('br');
		bookmark = document.createElement('p');
		bookmark.innerHTML = "No bookmarks, read on a compatible site to start.";
		document.body.appendChild(bookmark);
	}
	else {
		for (manga in mangaDictionary){
			document.body.appendChild(breakLine);
			breakLine = document.createElement('br');
			bookmark = document.createElement('a');
			splitName = manga.split("-");
			splitURL = mangaDictionary[manga].split("/");
			mangaName = '';
			for (i = 0; i < splitName.length; i++){
				if (i === splitName.length - 1){
					mangaName = mangaName + splitName[i][0].toUpperCase() + splitName[i].substring(1,) + ' - ';
				}
				else {
					mangaName = mangaName + splitName[i][0].toUpperCase() + splitName[i].substring(1,) + ' ';
				}
			}
			if (mangaDictionary[manga].includes("https://www.mangareader.net/")){
				mangaName = mangaName + 'Chapter ' + splitURL[4];
			}
			else if (mangaDictionary[manga].includes("https://mangahub.io/")){
				var splitURL2 = splitURL[5].split("-");
				for (i = 0; i < splitURL2.length; i++){
					mangaName = mangaName + splitURL2[i][0].toUpperCase() + splitURL2[i].substring(1,) + ' ';
				}	
			}
			else if (mangaDictionary[manga].includes("https://mangapark.net/")){
				mangaName = mangaName + 'Chapter ' + splitURL[6].substring(1,);
			}
			else if (mangaDictionary[manga].includes("https://www.webtoons.com/")){
				var splitURL2 = splitURL[6].split("-");
				for (i = 0; i < splitURL2.length; i++){
					mangaName = mangaName + splitURL2[i][0].toUpperCase() + splitURL2[i].substring(1,) + ' ';
				}	
			}
			bookmark.innerHTML = mangaName;
			bookmark.href = mangaDictionary[manga];
			bookmark.target = "_blank"
			document.body.appendChild(bookmark);
		}
	}
	var sites = document.createElement('a');
	sites.innerHTML = "Compatible Sites";
	sites.href = "list.html";
	document.body.appendChild(breakLine);
	var button = document.createElement("BUTTON");
	button.appendChild(sites);
	document.body.appendChild(button);
	
}


document.addEventListener('DOMContentLoaded', function(){
	const bookmarks = chrome.extension.getBackgroundPage();
	insertNames(bookmarks.mangas);
}, false);


