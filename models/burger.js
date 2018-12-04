var orm = require('../config/orm.js');

var burger = {
	
    all: function(callBackFunction) {
        orm.selectAll("burgers", function(res) {
            callBackFunction(res);
        });
    },

    create: function(vals, callBackFunction) {
        orm.insertOne("burgers", vals, function(res) {
            callBackFunction(res);
        });
    },

    update: function(columnValue, condition, callBackFunction) {
        orm.updateOne("burgers", columnValue, condition, function(res) {
            callBackFunction(res);
        });
    },

    delete: function(condition, callBackFunction) {
        orm.delete("burgers", condition, function(res) {
            callBackFunction(res);
        });
    }
};

module.exports = burger;
