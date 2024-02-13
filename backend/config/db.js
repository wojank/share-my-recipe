const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_DB_URI);
		console.log(
			`Połączyliśmy się z bazą danych na porcie ${conn.connection.port}`
		);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
