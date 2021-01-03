const fs = require('fs');
var path = require('path');

class FileSaverService {
	static saveData(pathString, rows) {
		const formattedDateString = FileSaverService.getFormattedDateString();
		const modifiedPathString = path.join(pathString, formattedDateString);

		if (!fs.existsSync(modifiedPathString)) {
			fs.mkdirSync(modifiedPathString);
		}

		const fileName = FileSaverService.getFileName();
		const filePath = path.join(modifiedPathString, fileName);

		fs.writeFileSync(filePath, rows);
	}

	static getFileName() {
		return `${FileSaverService.getFormattedDateString()}.txt`;
	}

	static getFormattedDateString() {
		const now = new Date(Date.now());
		return `${now.getFullYear()}-${FileSaverService.getMonth(now)}-${FileSaverService.getDay(now)}`;
	}

	static getMonth(date) {
		const month = date.getMonth() + 1;
		let monthString = month;

		if (month < 10) {
			monthString = `0${month}`;
		}

		return monthString;
	}

	static getDay(date) {
		const day = date.getDate();
		let dayString = day;

		if (day < 10) {
			dayString = `0${day}`;
		}

		return dayString;
	}
}

module.exports.FileSaverService = FileSaverService;