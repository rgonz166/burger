var connection = require('./connection.js');

module.exports = {
    selectAll: function(tableName, cb){
        var query = "SELECT * FROM ??";
        connection.query(query,[tableName],function(err,result){
            if(err) throw err;
            // run callback function passing in result
            cb(result);
        })
    }
}