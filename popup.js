const disable = ["true","false"];


function insertNames(mangaDictionary){
	var bookmark;
	var mangaName;
	var splitName;
	var splitURL;
	var checkbox;
	var deleteButton;
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
			checkbox = document.createElement("INPUT");
			checkbox.setAttribute("type", "checkbox");
			checkbox.setAttribute("id", manga);
			checkbox.setAttribute("class", "check");
			checkbox.setAttribute("disabled", "true");
			document.body.appendChild(checkbox);
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
			// else{
			// 	mangaName = mangaName + mangaDictionary[manga];
			// }
			bookmark.innerHTML = mangaName;
			bookmark.href = mangaDictionary[manga];
			bookmark.target = "_blank"
			bookmark.setAttribute("id", splitName[0]);
			document.body.appendChild(bookmark);
		}
	document.body.appendChild(breakLine);
	breakLine = document.createElement('br');
	}
	var sites = document.createElement('a');
	sites.innerHTML = "Compatible Sites";
	sites.href = "list.html";
	document.body.appendChild(breakLine);
	var button = document.createElement("BUTTON");
	button.appendChild(sites);
	document.body.appendChild(button);
	var deleteButton = document.createElement("BUTTON");
	deleteButton.innerHTML = "Delete";
	deleteButton.setAttribute("id", "deleteButton");
	document.body.appendChild(deleteButton);
}




let onclick = function (mangaDictionary){
	var box;
	var link;
	var i;
	var check = document.getElementsByClassName("check");
	var splitName;
	if (disable[0] === "true"){
		for (i = 0; i < check.length; i++) {
			check[i].removeAttribute("disabled");
		}
		disable[0] = "false";
	}
	else if (disable[0] === "false"){
		for (i = 0; i < check.length; i++) {
			check[i].setAttribute("disabled", "true");
			for (manga in mangaDictionary){
				if (document.getElementById(manga).checked === true){
					delete mangaDictionary[manga];
					box = document.getElementById(manga);
					box.remove();
					splitName = manga.split("-");
					link = document.getElementById(splitName[0]);
					link.remove();
				}
			}
		}
		disable[0] = "true";
	}
};

		

document.addEventListener('DOMContentLoaded', function(){
	const bookmarks = chrome.extension.getBackgroundPage();
	insertNames(bookmarks.mangas);
	document.querySelector('#deleteButton').addEventListener("click", function(){
		onclick(bookmarks.mangas);
	});
});



