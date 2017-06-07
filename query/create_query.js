'use strict';
var config = require('../config');
var underscore_lib = require('underscore');
var create_query_text = '';
var create_query_object = {};
var create_query_array = [];
var tabledata_fields_length = 0;

class Create_query {
    constructor() {
        var self = this;
    }
    createQuery(callback) {
        underscore_lib._.each(config.create, function (each_create_tabledata) {
            var primary_key_exist_flag = false;
            var primary_key_name = '';
            var each_create_tabledata_clone = underscore_lib._.clone(each_create_tabledata);
            var check_primary_key_exist_flag = underscore_lib._.filter(each_create_tabledata_clone, function (each_create) {
                if (typeof each_create == 'object') {
                    underscore_lib._.filter(each_create, function (each_field) {
                        if (each_field.is_primary === true) {
                            primary_key_exist_flag = true;
                            primary_key_name = each_field.name;
                        }
                    })
                }
            });

            create_query_text = "CREATE TABLE ";
            create_query_text += "`" + each_create_tabledata.db_name + "`" + "." + "`" + each_create_tabledata.table_name + "` ( ";
            tabledata_fields_length = each_create_tabledata.fields.length;
            var i = 0;
            underscore_lib._.each(each_create_tabledata.fields, function (each_field) {
                var each_field_clone = underscore_lib._.clone(each_field);
                for (var key in each_field_clone) {
                    if (each_field_clone[key] === false || each_field_clone[key] == '')
                        delete each_field_clone[key];
                }
                create_query_text += "`" + each_field_clone.name + "` " + each_field_clone.datatype + " ";
                if (each_field_clone.is_null !== true) {
                    create_query_text += "NOT NULL ";
                }
                else {
                    create_query_text += "NULL ";
                }
                if (each_field_clone.auto_increment ===true &&  each_field_clone.is_primary ===true ) {
                    create_query_text += "AUTO_INCREMENT ";
                }
                else if (each_field_clone.auto_increment !==each_field_clone.is_primary){
                     callback("Auto increment and primary key both should be true or false", null);
                }
                if (each_field_clone.default) {
                    if (each_field_clone.default.toLowerCase() == 'null') {
                        create_query_text += "DEFAULT NULL ";
                    }
                    else if (each_field_clone.default !== '' && each_field_clone.default.toLowerCase() !== 'current timestamp' ) {
                        create_query_text += "DEFAULT  '"+each_field_clone.default + "'";
                    }
                    else if (each_field_clone.default.toLowerCase() === 'current timestamp') {
                        create_query_text += "DEFAULT CURRENT_TIMESTAMP ";
                    }
                }
                if (each_field_clone.attributes) {
                    create_query_text += "ON UPDATE CURRENT_TIMESTAMP ";
                }

                if ((tabledata_fields_length - 1) !== i) {
                    create_query_text += ",";
                }
                if ((tabledata_fields_length - 1) === i && primary_key_exist_flag) {
                    create_query_text += ", PRIMARY KEY (`" + primary_key_name + "`) ";
                }
                i++;

            });
            create_query_text += ") ENGINE=InnoDB DEFAULT CHARSET=utf8mb4"
            create_query_object = create_query_text;
            create_query_array.push(create_query_object);
        });


        return callback(null, create_query_array);
    }
}

module.exports = Create_query;    