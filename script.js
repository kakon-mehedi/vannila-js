let table = document.querySelector('table');
const tableRowList = table.rows;

for (let i = 0; i < tableRowList.length; i++) {
	const tdList = tableRowList[i].children;

	for (let j = 0; j < tdList.length; j++) {
		const td = tdList[j];
		const orginalValue = td.dataset.rawValue;
		console.log(orginalValue);
	}
}
