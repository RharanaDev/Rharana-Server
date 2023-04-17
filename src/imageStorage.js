require('dotenv').config();

const imageStorage = process.env.IMAGE_PATH;

if (!imageStorage) {
    console.error(
      'Storage path IMAGE_PATH environment variable undefined, check .env'
    );
    process.exit(1);
}
module.exports = imageStorage;