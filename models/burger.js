var orm = require('../config/orm');

module.exports = {
    viewAll: function(cb){
        // READ/SELECT all records in database - reference orm.selectAll
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    insert: function(column,val,cb){
        orm.insertOne("burgers",column,val,function(res){
            cb(res);
        });
    },
    update: function(column, newVal, itemId,cb){
        orm.updateOne("burgers",column,newVal,itemId,function(res){
            cb(res);
        });
    }
}