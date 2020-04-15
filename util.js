const yaml = require('js-yaml')
const fs = require('fs-extra')

const convert = (input, output) => {
    const obj = yaml.load(fs.readFileSync(input, { encoding: 'utf-8' }))
    fs.ensureFileSync(output)
    fs.writeJSONSync(output, obj)
}

module.exports = convert