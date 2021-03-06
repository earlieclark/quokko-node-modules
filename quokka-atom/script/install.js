const path = require('path');
const download = require('download');
const del = require('del');

download(`https://wallabyjs.gallery.vsassets.io/_apis/public/gallery/publisher/WallabyJs/extension/quokka-vscode/1.0.120/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage`, 'build', {extract: true}).then(function () {
  del([
    path.join(__dirname, '../build/*.*'),
    '!' + path.join(__dirname, '../build/*.js'),
    path.join(__dirname, '../build/extension/*.*'),
    path.join(__dirname, '../build/extension/dist/*.*'),
    path.join(__dirname, '../build/extension/dist/wallaby/node_modules/fsevents'),
    path.join(__dirname, '../build/extension/images')
  ]);
});