const AWS = require('aws-sdk');

const s3 = new AWS.S3();

class S3Service {
	static async writeRowsToS3(rows) {
		return new Promise((resolve, reject) => {
			this.writeRowsToS3Internal(rows, resolve, reject);
		})
			.then(result => {
				console.log(result);
				return result;
			});
	}

	static writeRowsToS3Internal(rows, resolve, reject) {
		const callBackResult = (result) => {
			resolve(result);
		};

		s3.putObject({
			Bucket: 'arn:aws:s3:::rerawdata',
			Key: 'DataTestFile',
			Body: 'Testing Testing Hopefully successful.',
			ContentType: 'text'
		}, callBackResult);
	}
}

module.exports.S3Service = S3Service;
