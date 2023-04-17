require('dotenv').config();

const streamStorage = process.env.STREAMING_PATH;

if (!streamStorage) {
    console.error(
      'Storage path STREAMING_PATH environment variable undefined, check .env'
    );
    process.exit(1);
}
module.exports = streamStorage;