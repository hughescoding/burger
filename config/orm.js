var connection = require('../config/connection.js');


function objectToSql(ob) {
    var arr = [];
    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function (tableName, callBackFunction) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, resultsArr) {
            if (err) {
                throw err;
            }
            callBackFunction(resultsArr);
        });
    },

    insertOne: function (tableName, obj, callBackFunction) {
        var query = "INSERT INTO " + tableName + " SET ?";
        console.log(query);
        connection.query(query, {
                name: obj.name,
                devoured: false,
            },
            function (err, resultsArr) {
                if (err) {
                    throw err;
                }
                callBackFunction(resultsArr);
            });
    },

    updateOne: function (tableName, columnValue, condition, callBackFunction) {
        var query = "UPDATE " + tableName + " SET " + objectToSql(columnValue);
        query += " WHERE " + condition;
        console.log(query);
        connection.query(query, function (err, resultsArr) {
            if (err) {
                throw err;
            }
            callBackFunction(resultsArr);
        });
    },

    delete: function (tableName, condition, callBackFunction) {
        var query = "DELETE FROM " + tableName + " WHERE " + condition;
        connection.query(query, function (err, resultsArr) {
            if (err) {
                throw err;
            }
            callBackFunction(resultsArr);
        });
    }
};

module.exports = orm;