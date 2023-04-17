require('dotenv').config();

const storage = process.env.STORAGE_PATH;

if (!storage) {
  console.error(
    'Storage path STORAGE_PATH environment variable undefined, check .env'
  );
  process.exit(1);
}

module.exports = storage;
