const container = document.querySelector('#container');
let isShowText = false;
let text;

// Toast Msg Func

function showToastMessage() {
	const toast = createToast();

	addToastInTheBody(toast);

	setTimeout(() => {
		removeToast(toast);
	}, 3000);
}

function createToast() {
	const div = document.createElement('div');
	div.classList.add('toast-div');
	const toastMsg = document.createElement('span');
	toastMsg.innerText = 'I am Groot!';
	div.appendChild(toastMsg);

	return div;
}

function addToastInTheBody(toast) {
	const toastList = document.querySelector('#toastList');
	toastList.appendChild(toast);
}

function removeToast(toast) {
	toast.remove();
}

// Toggle Text Func

function toggleText() {
	isShowText = !isShowText;
	const button = document.querySelector('#toggleTextBtn');

	if (isShowText) {
		text = document.createElement('p');
		button.innerText = 'Hide Text';
		text.innerText = 'I love JavaScript';

		container.appendChild(text);
	} else {
		button.innerText = 'Show Text';
		text.remove();
	}
}

// Get Table Data

async function getTableData() {
	const API_URL = `https://jsonplaceholder.typicode.com/users`;
	const res = await fetch(API_URL);
	const dataJson = await res.json();
	bindTableData(dataJson);
}

function bindTableData(tableData) {
	const tableContainer = document.querySelector('.table-container');

	removeAllChildNodes(tableContainer);

	// remove if table has previous data exist so that it does not append new table with the previous one.

	const table = document.createElement('table');

	const tableHeadersRow = document.createElement('tr');
	tableHeadersRow.appendChild(createTableRowData('th', 'Name'));
	tableHeadersRow.appendChild(createTableRowData('th', 'Email'));
	tableHeadersRow.appendChild(createTableRowData('th', 'Website'));

	table.appendChild(tableHeadersRow);

	tableContainer.appendChild(table);

	for (let user of tableData) {
		const row = document.createElement('tr');
		row.appendChild(createTableRowData('td', user.name));
		row.appendChild(createTableRowData('td', user.email));
		row.appendChild(createTableRowData('td', user.website));

		table.appendChild(row);
	}
}

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function createTableRowData(type, text) {
	const rowData = document.createElement(type);
	rowData.innerText = text;
	return rowData;
}
