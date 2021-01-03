const config = require('./config.window.task.json');
const FetchRegionDataModule = require('./services/fetch-region-data-service');
const FileSaverModule = require('./services/file-saver-service');

const FetchRegionDataService = FetchRegionDataModule.FetchRegionDataService;
const FileSaverService = FileSaverModule.FileSaverService;

FetchRegionDataService.fetchAllRegions().then(rows => {
	FileSaverService.saveData(config.saveFilePath, rows);
});

