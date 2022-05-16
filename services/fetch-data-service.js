const regionServiceModule = require('./region-service');
const dateServiceModule = require('./date-service');
const resourceModule = require('../resource');
const utilModule = require('./util-service');
const axios = require('axios');

const DateService = dateServiceModule.DateService;
const RegionService = regionServiceModule.RegionService;

class FetchDataService {
	constructor() {
		this.pageSize = 5000;
		this.orderBy = ' ORDER BY entryDate DESC';
	}

	async fetchAllData(region) {
		const regionMap = RegionService.prototype.regionsMap[region];
		const formattedRegionString = RegionService.getFormattedRegionString(regionMap);
		const startDate = DateService.getStartDate();
		const endDate = DateService.getEndDate();

		const salesPromise = this.fetchData(startDate, endDate, formattedRegionString, 'sold');
		const inventoryPromise = this.fetchData(startDate, endDate, formattedRegionString, 'active');
		const expiredPromise = this.fetchData(startDate, endDate, formattedRegionString, 'expired');

		const results = await Promise.all([salesPromise, inventoryPromise, expiredPromise]);

		if (results.some(x => x.error.code !== 0)) {
			throw `Failed to fetch - error: ${results.find(x => x.error.code !== 0).error.code}`;
		}

		return results.reduce((acc, curr) => {
			return acc.concat(curr.rows);
		}, []);
	}

	async fetchData(startDate, endDate, regions, soldEnum) {
		const instance = axios.create({
			baseURL: resourceModule.querySQL,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		});

		let httpResponse = await instance.post(
			resourceModule.querySQL,
			this.getParams(startDate, endDate, regions, soldEnum)
		);

		return httpResponse.data;
	}

	getParams(startDate, endDate, regions, soldEnum) {
		const args = this.getArgs(startDate, endDate, regions, soldEnum);

		let searchQuery = 'SELECT * FROM *** WHERE ' + args.join(' AND ') + this.orderBy;
		searchQuery += ' LIMIT ' + this.pageSize + ' OFFSET ' + 0;

		let params = 'sql=' + encodeURIComponent(searchQuery);
		params += '&sold=' + this.getSoldFlag(soldEnum);
		params += '&s=' + utilModule.gReceiver_(searchQuery);

		return params;
	}

	getSoldFlag(soldEnum) {
		if (soldEnum === 'sold') {
			return 'sold';
		} else if (soldEnum === 'expired') {
			return 'expired';
		}

		return 'active';
	}

	getArgs(startDate, endDate, regions, soldEnum) {
		let args = ['(propertyClassCode = 0 OR propertyClassCode = 1)'];
		if (soldEnum === 'sold' || soldEnum === 'expired') {
			args = args.concat([
				`entryDate >= ${startDate}`,
				`entryDate <= ${endDate}`
			]);
		}

		return args
			.concat([
				`regionName IN (${regions})`
			]);
	}
}

module.exports.FetchDataService = FetchDataService;
