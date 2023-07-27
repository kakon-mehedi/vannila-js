// DOM;
console.dir(document);

// DOM methods -

// Find all the 'h1' tags which contains 'items' class.

const allH1 = document.querySelectorAll('h1');
const allItemsInsideH1 = allH1.querySelectorAll('items');

// Find all the child elements which contain 'user-name' class from the 'user-list' class

const userLists = document.querySelectorAll('.user-list');
const userNamesInsideUserLists = userLists.querySelectorAll('.user-name');

// Find all the child elements which contains 'star' class from the '#starList' id

const starList = document.querySelector('#starList'); //can not use querySelector all becsue Id is unique in the HTML DOM
const starsInTheStarList = starList.querySelector('');

// All css selectors are valid

const el = document.querySelector("div.user-panel.main input[name='login']");

const el2 = document.querySelector(
	"div.user-panel:not(.main) input[name='login']"
);
