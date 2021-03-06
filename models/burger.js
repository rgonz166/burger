var orm = require('../config/orm');

module.exports = {
    // READ/SELECT all records in database - reference orm.selectAll
    viewAll: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    // insert one new item
    insert: function(val,cb){
        orm.insertOne("burgers","burger_name",val,function(res){
            cb(res);
        });
    },
    // update an item
    update: function(itemId,cb){
        orm.updateOne("burgers","devoured",true,itemId,function(res){
            cb(res);
        });
    }
}