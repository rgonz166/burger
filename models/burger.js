var orm = require('../config/orm');

module.exports = {
    viewAll: function(callback){
        // READ/SELECT all records in database - reference orm.selectAll
        orm.selectAll("burgers",function(res){
            callback(res);
        });
    }
}