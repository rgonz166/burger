var orm = require('../config/orm');

module.exports = {
    // READ/SELECT all records in database - reference orm.selectAll
    viewAll: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    // insert one new item
    insert: function(column,val,cb){
        orm.insertOne("burgers",column,val,function(res){
            cb(res);
        });
    },
    // update an item
    update: function(column, newVal, itemId,cb){
        orm.updateOne("burgers",column,newVal,itemId,function(res){
            cb(res);
        });
    }
}