const fs = require("fs");

function run() {
	if(!process.env.REDIS_CONNECTION)
		throw new Error("REDIS_CONNECTION not defined");
	if(!process.env.QUEUE_NAME)
		throw new Error("QUEUE_NAME not defined");
	if(!process.env.QUEUE_PREFIX)
		throw new Error("QUEUE_PREFIX not defined");

	try {
		var t = process.env.REDIS_CONNECTION.split("://")[1].split(":");
		var host = t[0];
		var port = parseInt(t[1]);

		config = {
			queues: [
				{
					name: process.env.QUEUE_NAME,
					port: port,
					host: host,
					hostId: host,
					prefix: process.env.QUEUE_PREFIX
				}
			]
		};

		fs.writeFileSync("/opt/arena/src/server/config/index.json", JSON.stringify(config, " ", 4) + "\n");

	} catch (e) {
		throw new Error("Invalid REDIS_CONNECTION: " + process.env.REDIS_CONNECTION);
	}
}

if (require.main === module) run();

module.exports = run;
