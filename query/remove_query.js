'use strict';
var config = require('../config');
var underscore_lib = require('underscore');
var jsonSql = require('json-sql')();


class Remove_query {
    constructor() {
        var self = this;
    }
    removeQuery(callback) {
        var sql = jsonSql.build(config.remove);
        if(sql.query){
            callback(null,sql.query);
        }
        else{
            callback("No sql query formed",null);
        }
        
    }
}

module.exports = Remove_query;    