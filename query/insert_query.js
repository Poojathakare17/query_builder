'use strict';
var config = require('../config');
var underscore_lib = require('underscore');
var jsonSql = require('json-sql')();


class Insert_query {
    constructor() {
        var self = this;
    }
    insertQuery(callback) {
        var sql = jsonSql.build(config.insert);
        if(sql.query){
            callback(null,sql.query);
        }
        else{
            callback("No sql query formed",null);
        }
        
    }
}

module.exports = Insert_query;    