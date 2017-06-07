'use strict';
var config = {
    create: [{
        "db_name": "encrypt",
        "table_name": "employees",
        "fields": [{
            "name": "empid",
            "datatype": "int(11)",
            "auto_increment": true,
            "is_null": true,
            "default": "",
            "is_primary": true,
            "attributes": false
        },
        {
            "name": "name",
            "datatype": "varchar(255)",
            "auto_increment": false,
            "is_null": false,
            "default": "abc",
            "is_primary": false,
            "attributes": false
        },
        {
            "name": "dob",
            "datatype": "date",
            "auto_increment": false,
            "is_null": true,
            "default": "",
            "is_primary": false,
            "attributes": false
        },
        {
            "name": "hobbies",
            "datatype": "text",
            "auto_increment": false,
            "is_null": false,
            "default": "",
            "is_primary": false,
            "attributes": false
        },
        {
            "name": "timestamp",
            "datatype": "timestamp",
            "auto_increment": false,
            "is_null": true,
            "default": "current timestamp",
            "is_primary": false,
            "attributes": false
        }
        ]
    },
    {
        "db_name": "ia_vatika_67341",
        "table_name": "employees2",
        "fields": [{
            "name": "empid_emp2",
            "datatype": "int(11)",
            "auto_increment": true,
            "is_null": true,
            "default": "",
            "is_primary": true,
            "attributes": false
        },
        {
            "name": "name_emp2",
            "datatype": "varchar(255)",
            "auto_increment": false,
            "is_null": true,
            "default": "",
            "is_primary": false,
            "attributes": false
        },
        {
            "name": "dob_emp2",
            "datatype": "date",
            "auto_increment": false,
            "is_null": true,
            "default": "",
            "is_primary": false,
            "attributes": false
        },
        {
            "name": "hobbies_emp2",
            "datatype": "text",
            "auto_increment": false,
            "is_null": true,
            "default": "",
            "is_primary": false,
            "attributes": false
        },
        {
            "name": "timestamp_emp2",
            "datatype": "timestamp",
            "auto_increment": false,
            "is_null": true,
            "default": "",
            "is_primary": false,
            "attributes": true
        }
        ]
    }
    ],
    select:
    {
        type: 'select',
        table: 'users',
        fields: ['name', 'age'],
        condition: { name: 'Max', id: 6 }
    },
    insert: {
        type: 'insert',
        table: 'users',
        values: {
            name: 'John',
            lastname: 'Snow',
            age: 24,
            gender: 'male'
        }
    },
    update: {
        type: 'update',
        table: 'users',
        condition: {
            id: 5
        },
        modifier: {
            role: 'admin',
            age: 33
        }
    },
    remove: {
        type: 'remove',
        table: 'users',
        condition: {
            id: 5
        }
    }
}
module.exports = config;