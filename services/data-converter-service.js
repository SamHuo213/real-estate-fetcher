class DataConverterService {
	static convertToTsv(rows) {
		return rows
			.map(x => {
				return x.join('\t') + '\n';
			});
	}

	static convertToSingleLine(rows) {
		return rows.join(' ');
	}
}

module.exports.DataConverterService = DataConverterService;
