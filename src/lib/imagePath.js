const path = require('path');
const imageStorage = require('../imageStorage');

//Determine which slash to use for storage depending on operating system
const slash = process.platform === 'win32' ? '\\' : '/';

const processImagePath = (urlPath) => {
    const relativePath = urlPath ? urlPath.replace(/--/g, slash) : slash;
    const absolutePath = path.join(imageStorage, relativePath);
  
    return { relativePath, absolutePath };
};
module.exports = processImagePath;