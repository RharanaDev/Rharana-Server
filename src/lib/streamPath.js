const path = require('path');
const streamStorage = require('../streamStorage');

//Determine which slash to use for storage depending on operating system
const slash = process.platform === 'win32' ? '\\' : '/';

const processStreamPath = (urlPath) => {
    const relativePath = urlPath ? urlPath.replace(/--/g, slash) : slash;
    const absolutePath = path.join(streamStorage, relativePath);
  
    return { relativePath, absolutePath };
};
module.exports = processStreamPath;