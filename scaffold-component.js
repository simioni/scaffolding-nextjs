/**
 * @file bin/scaffold-component.js
 * Handles scaffolding a basic stateless component.
 */
const fs = require('fs')
const path = require('path')
const minimist = require('minimist')
const scaffoldComponent = require('./scaffolding/scaffold-component')

const constants = require('./constants')

const PACKAGE_PATH = constants.getPackagePath()
let SOURCE_DIR = constants.dirs().src

fs.access(path.resolve(PACKAGE_PATH, SOURCE_DIR, 'src'), function (error) {
  if (!error) {
    // Found src directory
    SOURCE_DIR += '/src/'
  }
})

module.exports = (function () {
  const argv = minimist(process.argv.slice(2))
  return scaffoldComponent({
    name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/stateless-component'),
    dest: path.resolve(PACKAGE_PATH, SOURCE_DIR, 'components', argv.name),
  })
})()
