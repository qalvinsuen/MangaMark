const disable = ["true","false"];


let insertNames = function(mangaDictionary,sortOFF){
	var bookmark;
	var mangaName;
	var splitName;
	var splitURL;
	var checkbox;
	var deleteButton;
	var i;
	var breakLine = document.createElement('br');
	var size = Object.keys(mangaDictionary).length;
	if (size === 0 && sortOFF === 2){
		breakLine.setAttribute("class", "all");
		document.body.appendChild(breakLine);
		bookmark = document.createElement('p');
		bookmark.innerHTML = "No bookmarks, read on a compatible site to start.";
		document.body.appendChild(bookmark);
	}
	else {
		for (manga in mangaDictionary){
			breakLine.setAttribute("class", "all");
			document.body.appendChild(breakLine);
			breakLine = document.createElement('br');
			breakLine.setAttribute("class", "all");
			bookmark = document.createElement('a');
			checkbox = document.createElement("INPUT");
			checkbox.setAttribute("type", "checkbox");
			checkbox.setAttribute("id", manga);
			checkbox.setAttribute("class", "check all");
			// checkbox.setAttribute("class", "all");
			checkbox.setAttribute("disabled", "true");
			document.body.appendChild(checkbox);
			if (mangaDictionary[manga].includes("https://www.mangahere.cc/")){
				splitName = manga.split("_");
			}
			else {
				splitName = manga.split("-");
			}
			splitURL = mangaDictionary[manga].split("/");
			mangaName = '';
			for (i = 0; i < splitName.length; i++){
				if (i === splitName.length - 1 && splitName[i][0]){
					mangaName = mangaName + splitName[i][0].toUpperCase() + splitName[i].substring(1,) + ' - ';
				}
				else if (splitName[i][0]){
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
			else if (mangaDictionary[manga].includes("https://leviatanscans.com/")){
				mangaName = mangaName + 'Volume ' + splitURL[5] + " Chapter " + splitURL[6];
			}
			else if (mangaDictionary[manga].includes("https://mangasee123.com/")){
				var splitURL2 = splitURL[4].split("-chapter-");
				var splitURL3 = splitURL2[1].split("-page-");
				var splitURL4 = splitURL3[1].split(".html");
				// mangaName = mangaName + 'Chapter ' + splitURL3[0] + " Page " + splitURL4[0];
				mangaName = mangaName + 'Chapter ' + splitURL3[0];
			}
			else if (mangaDictionary[manga].includes("https://www.mangahere.cc/")){
				mangaName = mangaName + "Chapter " + (parseInt(splitURL[5].substring(1,))).toString();
			}
			else if (mangaDictionary[manga].includes("https://merakiscans.com/")){
				mangaName = mangaName + "Chapter " + splitURL[5];
			}
			else if (mangaDictionary[manga].includes("https://w11.mangafreak.net/")){
				var splitURL2 = splitURL[3].split("_");
				mangaName = mangaName + "Chapter " + splitURL2[splitURL2.length - 1];
			}
			// else{
			// 	mangaName = mangaName + mangaDictionary[manga];
			// }
			bookmark.innerHTML = mangaName;
			bookmark.href = mangaDictionary[manga];
			bookmark.target = "_blank"
			bookmark.setAttribute("id", mangaDictionary[manga]);
			bookmark.setAttribute("class", "all");
			document.body.appendChild(bookmark);
		}
	}
	if (sortOFF){
		document.body.appendChild(breakLine);
		breakLine = document.createElement('br');

		breakLine.setAttribute("class", "all");
		var sites = document.createElement('a');
		sites.innerHTML = "Compatible Sites";
		sites.href = "list.html";
		sites.setAttribute("class", "all");
		document.body.appendChild(breakLine);
		var button = document.createElement("BUTTON");
		button.setAttribute("class", "all");
		button.appendChild(sites);
		document.body.appendChild(button);
		var deleteButton = document.createElement("BUTTON");
		deleteButton.innerHTML = "Delete";
		deleteButton.setAttribute("id", "deleteButton");
		deleteButton.setAttribute("class", "all");
		document.body.appendChild(deleteButton);
		var alphaSort = document.createElement("BUTTON");
		alphaSort.innerHTML = "Sort";
		alphaSort.setAttribute("id", "alphaSort");
		alphaSort.setAttribute("class", "all");
		document.body.appendChild(alphaSort);
	}
}




let deleteBookmarks = function (mangaDictionary){
	var box;
	var link;
	var i;
	var check = document.getElementsByClassName("check");
	var url;
	if (disable[0] === "true"){
		for (i = 0; i < check.length; i++){
			check[i].removeAttribute("disabled");
		}
		disable[0] = "false";
	}
	else if (disable[0] === "false"){
		for (i = 0; i < check.length; i++) {
			check[i].setAttribute("disabled", "true");
			for (manga in mangaDictionary){
				if (document.getElementById(manga).checked === true){
					url = mangaDictionary[manga];
					delete mangaDictionary[manga];
					box = document.getElementById(manga);
					box.remove();
					link = document.getElementById(url);
					link.remove();
				}
			}
		}
		disable[0] = "true";
	}
};

let sortBookmarks = function (mangaDictionary){
	var all = document.getElementsByClassName("all");
	var i;
	var temp;
	var sortedKeys;
	var oneDict = {};
	for (i = 0; i < all.length; i++){
		temp = all[i];
		temp.remove();
	}
	all = document.getElementsByClassName("all");
	for (i = 0; i < all.length; i++){
		temp = all[i];
		temp.remove();
	}
	all = document.getElementsByClassName("all");
	for (i = 0; i < all.length; i++){
		temp = all[i];
		temp.remove();
	}
	all = document.getElementsByClassName("all");
	for (i = 0; i < all.length; i++){
		temp = all[i];
		temp.remove();
	}
	all = document.getElementsByClassName("all");
	for (i = 0; i < all.length; i++){
		temp = all[i];
		temp.remove();
	}
	sortedKeys = (Object.keys(mangaDictionary)).sort();
	for (i = 0; i < sortedKeys.length; i++){
		oneDict[sortedKeys[i]] = mangaDictionary[sortedKeys[i]];
		insertNames(oneDict,0);
		oneDict = {};
	}
	insertNames(oneDict,1);
}		

document.addEventListener('DOMContentLoaded', function(){
	const bookmarks = chrome.extension.getBackgroundPage();
	insertNames(bookmarks.mangas,2);
	document.querySelector('#deleteButton').addEventListener("click", function(){
		deleteBookmarks(bookmarks.mangas);
	});
	document.querySelector('#alphaSort').addEventListener("click", function(){
		sortBookmarks(bookmarks.mangas);
		document.querySelector('#deleteButton').addEventListener("click", function(){
		deleteBookmarks(bookmarks.mangas);
	});
	});
});



