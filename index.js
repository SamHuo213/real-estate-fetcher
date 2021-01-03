const fetchDataServiceModule = require('./services/fetch-data-service');
const s3ServiceModule = require('./services/s3-service');

exports.handler = async (event) => {
	const service = new fetchDataServiceModule.FetchDataService();
	const rows = await service.fetchAllData(event.region);

	const s3Service = s3ServiceModule.S3Service;
	await s3Service.writeRowsToS3(rows);

	const response = {
		statusCode: 200,
		body: "Successfully fetch data."
	};
	return response;
};

exports.handler({
	region: 'mapvw'
}).then(x => {
});
