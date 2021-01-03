const fetchDataServiceModule = require('./fetch-data-service');
const regionServiceModule = require('./region-service');
const dataConverterModule = require('./data-converter-service');

const RegionService = regionServiceModule.RegionService;
const DataConverterService = dataConverterModule.DataConverterService;

class FetchRegionDataService {
	static delay(milliseconds) {
		return new Promise(resolve => setTimeout(resolve, milliseconds));
	};

	static async fetchSingleRegion(region) {
		const service = new fetchDataServiceModule.FetchDataService();
		const rows = await service.fetchAllData(region);

		return rows;
	};

	static async fetchAllRegions() {
		const allRegions = RegionService.getAllRegionKeys();
		const regionResults = [];
		const delayTime = 1000;

		for (const region of allRegions) {
			const singleRegionalResult = await FetchRegionDataService.fetchSingleRegion(region);
			regionResults.push({
				region,
				rows: singleRegionalResult
			});

			// Too not overload the server not in my control
			await FetchRegionDataService.delay(delayTime);
		}

		const allRows = regionResults.reduce((acc, curr) => {
			return acc.concat(curr.rows);
		}, []);

		return DataConverterService.convertToSingleLine(
			DataConverterService.convertToTsv(allRows)
		);
	};
}

module.exports.FetchRegionDataService = FetchRegionDataService;