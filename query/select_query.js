'use strict';
var config = require('../config');
var underscore_lib = require('underscore');
var jsonSql = require('json-sql')();


class Select_query {
    constructor() {
        var self = this;
    }
    selectQuery(callback) {
        var sql = jsonSql.build(config.select);
        if(sql.query){
            callback(null,sql.query);
        }
        else{
            callback("No sql query formed",null);
        }
        
    }
}

module.exports = Select_query;    