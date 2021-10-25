const fs = require('fs-extra');

if (!fs.existsSync(`${process.cwd()}/demo_dist/dist`)) {
  fs.mkdirSync(`${process.cwd()}/demo_dist/dist`);
}

fs.copySync(`${process.cwd()}/dist`, `${process.cwd()}/demo_dist/dist`);
fs.copySync(`${process.cwd()}/index.js`, `${process.cwd()}/demo_dist/index.js`);
