const REPORT_INFO = {
	title: 'Sales calculation',
	filterName: 'Sales in CHF per country',
	planningScenario: 2024,
	planningPeriod: 2024,
	regions: 'Poland, Chech Republic',
	departments: 'dept1, dept2, dept 3',
	partners: 'Partner1, Parter2',
	products: `AZ Allergan ,BA Allergan ,BA Biogaia ,BA Eisai ,BA Falk ,BA Isoprinosine ,BA Perskindol ,BA Revalid ,BA Tilman ,BA Various OTC,BA Various RX,BG Allergan ,BG Biogaia ,BG Biogen ,BG Bracco /Acist ,BG
	Dentinox ,BG Eisai ,BG Ever,BG Ewofex ,BG Falk ,BG Hennig ,BG Isoprinosine ,BG Krewel Meuselbach ,BG Medical Diagnostics ,BG Pharmacosmos ,BG Revalid ,BG Santhera ,BG Stallergenes ,BG Tilman ,BG
	Various OTC,BG Various RX,BG Viruxan ,BG Zeller (Remotiv ),CH Biogen ,CH Isoprinosine ,CH Revalid ,CH Various OTC,CH Various RX,CZ Biogaia ,CZ Eisai ,CZ Eumedica ,CZ Ewofex ,CZ Falk ,CZ Hennig ,CZ
	Isoprinosine ,CZ Local Overhead ,CZ Medical Diagnostics ,CZ Perskindol ,CZ Pharmacosmos ,CZ Revalid ,CZ Santhera ,CZ Tilman ,CZ Various OTC,CZ Various RX,CZ Viruxan ,CZ Zeller (Remotiv ),EE
	Allergan ,EE Biogaia ,EE Biogen ,EE Eisai ,EE Hennig ,EE Santhera ,EE Various OTC,EE Various RX,GE Allergan ,HQ Various OTC,HR Allergan ,HR Biogaia ,HR Biogen ,HR Eisai ,HR Isoprinosine ,HR Krewel
	Meuselbach ,HR Perskindol ,HR Pharmacosmos ,HR Revalid ,HR Santhera ,HR Stallergenes ,HR Tilman ,HR Various OTC,HR Various RX,HU Allergan ,HU Bracco /Acist ,HU Desitin RX,HU Eisai ,HU Ewofex ,HU
	Falk ,HU Galderma OTC,HU Galderma RX,HU Hennig ,HU Isoprinosine ,HU Perskindol ,HU Revalid ,HU Santhera ,HU Stallergenes ,HU Tilman ,HU Various OTC,HU Various RX,HU Viruxan ,IE Isoprinosine ,KZ
	Allergan ,KZ Isoprinosine ,LT Allergan ,LT Biogaia ,LT Biogen ,LT Eisai ,LT Hennig ,LT Isoprinosine ,LT Santhera ,LT Stallergenes ,LT Tilman ,LT Various OTC,LT Various RX,LVAllergan ,LVBiogaia ,LVBiogen ,LV
	Eisai ,LVHennig ,LVIsoprinosine ,LVSanthera ,LVStallergenes ,LVTilman ,LVVarious OTC,LVVarious RX,MD Allergan ,MD Biogaia ,MD Bracco /Acist ,MD Isoprinosine ,MD Revalid ,MD Tilman ,MD Various
	OTC,ME Biogaia ,ME Falk ,ME Perskindol ,ME Revalid ,ME Santhera ,ME Tilman ,ME Various OTC,MK Biogaia ,MK Hennig ,MK Isoprinosine ,MK Revalid ,MK Santhera ,MK Tilman ,MK Various OTC,MK Various
	RX,MK Viruxan ,PL Biogaia ,PL Desitin RX,PL Eisai ,PL Eumedica ,PL Ever,PL Ewofex ,PL Falk ,PL Grindex ,PL Hennig ,PL Isoprinosine ,PL Pharmacosmos ,PL Revalid ,PL Santhera ,PL Spirig ,PL Various OTC,PL
	Various RX,PL Viruxan ,RO Allergan ,RO Biogaia ,RO Biogen ,RO Bracco /Acist ,RO Eisai ,RO Ewofex ,RO Falk ,RO Grindex ,RO Hennig ,RO Isoprinosine ,RO Pharmacosmos ,RO Revalid ,RO Santhera ,RO
	Stallergenes ,RO Tilman ,RO Various OTC,RO Various RX,RO Viruxan ,RO Zeller (Remotiv ),RS Allergan ,RS Biogaia ,RS Biogen ,RS Eisai ,RS Ever,RS Falk ,RS Galderma OTC,RS Galderma RX,RS
	Isoprinosine ,RS Krewel Meuselbach ,RS Perskindol ,RS Pharmacosmos ,RS Revalid ,RS Santhera ,RS Tilman ,RS Various OTC,RS Various RX,RU Isoprinosine ,SI Allergan ,SI Biogaia ,SI Eisai ,SI Falk ,SI
	Hennig ,SI Perskindol ,SI Pharmacosmos ,SI Revalid ,SI Santhera ,SI Stallergenes ,SI Tilman ,SI Various OTC,SI Various RX,SK Biogaia ,SK Eisai ,SK Ewofex ,SK Falk ,SK Hennig ,SK Isoprinosine ,SK Medical
	Diagnostics ,SK Perskindol ,SK Revalid ,SK Santhera ,SK Tilman ,SK Various OTC,SK Various RX,SK Viruxan ,UA Allergan ,UA Isoprinosine ,UZ Allergan ,XKBiogaia ,XKBiogen ,XKIsoprinosine ,XKTilman`
};

const COLORS = {
	primary: '#0c343d',
	accent: '#e0ecef',
};

const headerStyle = {
	background: COLORS.primary,
	color: 'white',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	fontSize: '12px',
	padding: '24px',
};

const logo =
	'data:image/png;base64,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';

/* Genering all the required divs */

// Filter Section
const filterSection = document.createElement('p');
filterSection.textContent = 'Filter Sections';
const filterSectionStyle = {
	textAlign: 'center',
	background: '#006479',
	padding: '10px',
	color: 'white',
	fontWeight: '500',
};
Object.assign(filterSection.style, filterSectionStyle);

const header = document.createElement('div');

/* Titles Section */
const titleSection = document.createElement('div');
const title = generateElement('h2', REPORT_INFO.title);
const filterName = generateElement('h2', REPORT_INFO.filterName);
let planningYear;

if (REPORT_INFO.planningScenario) {
	planningYear = generateElement(
		'h2',
		`Planning Scenario: ${REPORT_INFO.planningScenario} | Planning Period: ${REPORT_INFO.planningPeriod}`
	);
} else {
	planningYear = generateElement(
		'h2',
		`Planning Period: ${REPORT_INFO.planningPeriod}`
	);
}

/* Logo section */

const imageStyle = {
	width: '190px',
};

const image = document.createElement('img');
image.setAttribute('src', logo);

/* Filter list Section */

const filterCommonStyle = {
	display: 'flex',
	// alignItems: 'center',
	// background: COLORS.accent,
	// borderRadius: '4px',
	// margin: '4px 0',
};

const titleCommonStyle = {
	background: '#0C333D',
	color: 'white',
	width: '20%',
	display: 'flex',
	alignItems: 'center',
	padding: '20px',
	fontWeight: '500',
};

const filterStyle = {
	background: COLORS.accent,
	borderRadius: '4px',
	display: 'flex',
	alignItems: 'center',
	width: '80%',
	marginLeft:'-10px'
};

const filterParagraphStyle = {
	marginLeft:'20px',
}

const filtersDiv = document.createElement('div');
const divider1 = document.createElement('hr');
const divider2 = document.createElement('hr');
const divider3 = document.createElement('hr');
const lineBreak = document.createElement('br');

let regions;
let departments;
let partners;
let products;


if (REPORT_INFO.regions) {
	regions =generateElement('div');
	const title =generateElement('span', 'Countries');
	Object.assign(title.style, titleCommonStyle);
	regions.appendChild(title);

	const filters =generateElement('div');
	Object.assign(filters.style, filterStyle);

	const paragraph =generateElement('p', REPORT_INFO.regions);
	Object.assign(paragraph.style, filterParagraphStyle);
	filters.appendChild(paragraph);

	regions.appendChild(filters);

	Object.assign(regions.style, filterCommonStyle);
	filtersDiv.appendChild(regions);
	filtersDiv.appendChild(divider1);
}

if (REPORT_INFO.departments) {
	departments =generateElement('div');
	const title =generateElement('span', 'Departments');
	Object.assign(title.style, titleCommonStyle);
	departments.appendChild(title);

	const filters =generateElement('div');
	Object.assign(filters.style, filterStyle);

	const paragraph =generateElement('p', REPORT_INFO.departments);
	Object.assign(paragraph.style, filterParagraphStyle);
	filters.appendChild(paragraph);

	departments.appendChild(filters);

	Object.assign(departments.style, filterCommonStyle);
	filtersDiv.appendChild(departments);
	filtersDiv.appendChild(divider2);
}

if (REPORT_INFO.partners) {
	partners =generateElement('div');
	const title =generateElement('span', 'Partners');
	Object.assign(title.style, titleCommonStyle);
	partners.appendChild(title);

	const filters =generateElement('div');
	Object.assign(filters.style, filterStyle);

	const paragraph =generateElement('p', REPORT_INFO.partners);
	Object.assign(paragraph.style, filterParagraphStyle);
	filters.appendChild(paragraph);

	partners.appendChild(filters);

	Object.assign(partners.style, filterCommonStyle);
	filtersDiv.appendChild(partners);
	filtersDiv.appendChild(divider3);
}

if (REPORT_INFO.products) {
	products =generateElement('div');
	const title =generateElement('span', 'Products');
	Object.assign(title.style, titleCommonStyle);
	products.appendChild(title);

	const filters =generateElement('div');
	Object.assign(filters.style, filterStyle);

	const paragraph =generateElement('p', REPORT_INFO.products);
	Object.assign(paragraph.style, filterParagraphStyle);
	filters.appendChild(paragraph);

	products.appendChild(filters);

	Object.assign(products.style, filterCommonStyle);
	filtersDiv.appendChild(products);
	filtersDiv.appendChild(lineBreak);
}

/* Assigning styles to the Elements */

Object.assign(header.style, headerStyle);
Object.assign(image.style, imageStyle);

/* Appending Childs */

/* TitleList */

titleSection.appendChild(title);
titleSection.appendChild(filterName);
titleSection.appendChild(planningYear);

header.appendChild(titleSection);
header.appendChild(image);

const mainDiv = document.createElement('div');
mainDiv.appendChild(header);
mainDiv.appendChild(filterSection);
mainDiv.appendChild(filtersDiv);

const body = document.querySelector('body');
body.appendChild(mainDiv);

function generateElement(type, text) {
	const element = document.createElement(type);

	if (text) {
		element.textContent = text;
	}

	return element;
}
