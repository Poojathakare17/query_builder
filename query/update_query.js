'use strict';
var config = require('../config');
var underscore_lib = require('underscore');
var jsonSql = require('json-sql')();


class Update_query {
    constructor() {
        var self = this;
    }
    updateQuery(callback) {
        var sql = jsonSql.build(config.update);
        if(sql.query){
            callback(null,sql.query);
        }
        else{
            callback("No sql query formed",null);
        }
        
    }
}

module.exports = Update_query;    