class DateService {
	static getStartDate(startDate = null) {
		if (startDate) {
			return this.getStringFormattedDate(startDate);
		}

		let internalStartDate = new Date(Date.now());

		let desiredMonth = internalStartDate.getMonth() - 1;
		if (desiredMonth < 0) {
			desiredMonth = 12 + desiredMonth;
			internalStartDate.setFullYear(internalStartDate.getFullYear() - 1);
		}

		internalStartDate.setMonth(desiredMonth);

		return this.getStringFormattedDate(internalStartDate);
	}

	static getEndDate(endDate = null) {
		if (endDate) {
			return this.getStringFormattedDate(endDate);
		}

		return this.getStringFormattedDate(new Date(Date.now()));
	}

	static getStringFormattedDate(date) {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();

		return `'${year}-${month}-${day}'`;
	}
}

module.exports.DateService = DateService;
