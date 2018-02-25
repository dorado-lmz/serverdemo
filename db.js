var fs = require('mz/fs');
var path = require("path");

const _path = './mockdata', head = 'mock_';
var _cache = {};

function writeFile(name, data) {
    fs.writeFile(path.join(_path, head+name, data)).then(() => {
        console.log('write' + name + 'success');
    }, () => {

    }).catch(() => {

    });
}


function getAllFiles() {
    return fs.readdir(_path).then(files => {
        _cache.files = files;
        return files || [];
    });
}

function getAllRules() {
    if (_cache.files) {
        return _cache.files;
    }
    return getAllFiles();
}

function updateRule(name, data) {
    return fs.writeFile(path.join(_path,name), data).then(() => {
        getAllFiles();  // 重新更新缓存
        return {msg: 'success'};
    });
}

function getRule(name) {
    return fs.readFile(path.join(_path, name), 'utf8').then(data => {
        return {data};
    });
}


module.exports = {
    getAllRules: getAllRules,
    updateRule: updateRule,
    getRule: getRule
}