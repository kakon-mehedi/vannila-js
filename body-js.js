function generatePdfBodyElement(project) {
	const container = document.createElement('div');
	Object.assign(container.style, {
		width: '90%',
		margin: '0 auto',
		display: 'flex',
		flexDirection: 'column',
		padding: '0 88px',
	});

	document.body.appendChild(container);

	const infoSection = generateInfoSection(project);
	container.appendChild(infoSection);

	const titleSection = createProjectTitle('My Title');
	container.appendChild(titleSection);

	container.appendChild(generateTableElement());
}

function generateInfoSection(project) {
	const infoSection = generateElement('div');

	const infoSectionStyle = {
		background: 'black',
		display: 'flex',
		justifyContent: 'space-between',
		width: '70%',
		fontFamily: 'Arial',
		margin: '18px 0',
	};

	Object.assign(infoSection.style, infoSectionStyle);

	const projectName = generateElement('p', 'PIKETTDOSSIER');
	const projectDate = generateElement('p', 'Project.StartDate');

	infoTextStyle = {
		fontSize: '18px',
		color: 'white',
		fontWeight: 'bold',
		margin: '8px 20px',
	};

	Object.assign(projectName.style, infoTextStyle);
	Object.assign(projectDate.style, infoTextStyle);

	infoSection.appendChild(projectName);
	infoSection.appendChild(projectDate);

	return infoSection;
}

function createDivider(borderSize) {
	const div = generateElement('div');

	divStyle = {
		borderTop: `${borderSize} solid black`,
		backgroundColor: 'black',
		marginTop: '30px',
		marginBottom: '30px',
	};

	Object.assign(div.style, divStyle);

	return div;
}

function createProjectTitle(title = 'demoTitle') {
	const reportHeader = generateElement('div');
	Object.assign(reportHeader.style, {
		paddingTop: '5px',
		paddingBottom: '5px',
		borderTop: '2px solid black',
		borderBottom: '2px solid black',
	});

	const div = generateElement('div', title);

	divStyle = {
		padding: '10px',
		backgroundColor: '#808080',
		color: 'white',
		fontSize: '24px',
		fontWeight: 'bold',
		textAlign: 'center',
	};

	Object.assign(div.style, divStyle);

	reportHeader.appendChild(div);

	return reportHeader;
}

function generateElement(type, text) {
	const elem = document.createElement(type);
	if (text) elem.innerText = text;

	return elem;
}

function generateTableElement() {
	const table = document.createElement('table');
	const addressTr = generateTableAddressRow({});
	const billingAddressTr = generateTableAddressRow({});

	const addressTr2 = generateElement('tr');

	addressTr2.appendChild(addressTr);
	addressTr2.appendChild(billingAddressTr);

	Object.assign(addressTr2.style, {
		display: 'flex',
		justifyContent: 'space-between',
		fontFamily: 'Arial',
	});

	table.appendChild(addressTr2);

	return table;
}

function generateTableAddressRow(address) {
	const {
		Street = 'Demo',
		StreetNumber = 'test',
		PostalCode = 'Test',
		City = 'Test address',
	} = address;
	const tr = generateElement('tr');
	Object.assign(tr.style, {
		width: '100%',
		display: 'flex',
	});

	const td = generateElement('td', 'Customer Address');
	Object.assign(td.style, {
		fontWeight: 'bold',
		width: '25%',
	});

	const td2 = generateElement('td');
	Object.assign(td2.style, {
		width: '25%',
	});
	const div = generateElement('div');
	Object.assign(div.style, {});
	const street = generateElement('p', Street);
	street.appendChild(document.createElement('br'));

	const streetNumber = generateElement('p', StreetNumber);
	streetNumber.appendChild(document.createElement('br'));

	const postalCode = generateElement('p', PostalCode);
	postalCode.appendChild(document.createElement('br'));

	const city = generateElement('p', City);
	city.appendChild(document.createElement('br'));

	td2.appendChild(div);
	div.appendChild(street);
	div.appendChild(streetNumber);
	div.appendChild(streetNumber);
	div.appendChild(postalCode);
	div.appendChild(city);

	tr.appendChild(td);
	tr.appendChild(td2);

	return tr;
}

function generateTableRow(
	key1 = 'DELTA',
	value1 = 'delta',
	key2 = 'DELTA',
	value2 = 'delta'
) {
	const tr = generateElement('tr');
	Object.assign(tr.style, {
		background: 'red',
	});

	const td1 = generateElement('td', key1);
	Object.assign(td1.style, {
		fontWeight: 'bold',
		width: '25%',
	});

	const td2 = generateElement('td', value1);
	Object.assign(td2.style, {
		width: '25%',
	});
    
	const td3 = generateElement('td', key2);
	Object.assign(td3.style, {
		width: '25%',
	});
	const td4 = generateElement('td', value2);
	Object.assign(td4.style, {
		width: '25%',
	});

	return tr;
}

generatePdfBodyElement({});
