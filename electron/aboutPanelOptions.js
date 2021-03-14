const { npm_package_productName, npm_package_version } = process.env;

module.exports = {
  applicationName: npm_package_productName,
  applicationVersion: npm_package_version,
  version: npm_package_version,
  copyright: "Copyright © 2021 王若非. All rights reserved.",
};
