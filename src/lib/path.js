const path = require('path');
const streamStorage = require('../storage');
const storage = require('../storage');

//Determine which slash to use for storage depending on operating system
const slash = process.platform === 'win32' ? '\\' : '/';

//Change "-" mandatory separator to chosen slash
const processPath = (urlPath) => {
  const relativePath = urlPath ? urlPath.replace(/--/g, slash) : slash;
  const absolutePath = path.join(storage, relativePath);

  return { relativePath, absolutePath };
};

module.exports = processPath;