class RegionService {
	static getFormattedRegionString(regions) {
		return regions
			.map(x => `'${x}'`)
			.join(',');
	}

	static getAllRegionKeys() {
		return Object.keys(RegionService.prototype.regionsMap);
	}
}

RegionService.prototype.regionsMap = {
	mapsc: [
		'Sunshine Coast'
	],
	mapsq: [
		'Squamish', 'Whistler', 'Pemberton'
	],
	mapbd: [
		'Bowen Island'
	],
	mapwv: [
		'West Vancouver'
	],
	mapnv: [
		'North Vancouver'
	],
	mapvw: [
		'Vancouver West'
	],
	mapve: [
		'Vancouver East'
	],
	mapby: [
		'Burnaby East', 'Burnaby North', 'Burnaby South'
	],
	mapnw: [
		'New Westminster'
	],
	mappm: [
		'Port Moody'
	],
	mapcq: [
		'Coquitlam', 'Port Coquitlam'
	],
	mapmr: [
		'Pitt Meadows', 'Maple Ridge'
	],
	mapri: [
		'Richmond'
	],
	mapld: [
		'Ladner', 'Tsawwassen'
	],
	gulfislands: [
		"Islands-Van. & Gulf", "Gulf Islands"
	],
	mapfvnorthsurrey: [
		'North Surrey'
	],
	mapfvsurrey: [
		'N. Delta', 'Surrey', 'Cloverdale'
	],
	mapfvsouthsurrey: [
		'South Surrey White Rock'
	],
	mapfvlangley: [
		'Langley'
	],
	mapfvmission: [
		'Mission'
	],
	mapfvabbotsford: [
		'Abbotsford'
	],
	mapcd: [
		'Agassiz', 'Harrison Hot Springs', 'Harrison Mills / Mt Woodside', 'Rosedale', 'Cultus Lake', 'Sardis', 'Yarrow', 'Chilliwack', 'Hope'
	],
	mappr: [
		'Powell River'
	]
};

module.exports.RegionService = RegionService;
