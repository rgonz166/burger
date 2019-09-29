var connection = require('./connection.js');

module.exports = {
    selectAll: function(tableName, cb){
        var query = "SELECT * FROM ??";
        connection.query(query,[tableName],function(err,result){
            if(err) throw err;
            // run callback function passing in result
            cb(result);
        })
    },
    insertOne: function(tableName,columnName,value, cb){
        var query = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(query,[tableName,columnName,value],function(err,result){
            if(err) throw err;
            cb(result);
        })
    },
    updateOne: function(tableName, columnName, newVal,itemId, cb){
        var query = "UPDATE ?? SET ?? == ? WHERE id=?";
        connection.query(query,[tableName,columnName,newVal,itemId],function(err,result){
            if(err) throw err;
            cb(result);
        })
    }
}