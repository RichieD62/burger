var connection = require("./connection");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result);
        })
        
        console.log(result);
    },

    insertOne: function (tableInput, values, cb) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES(?);";
        connection.query(queryString, [tableInput, values], function(err, result){
            if (err) throw err;
            cb(result);
        })

        console.log(result);
    },

    updateOne: function(tableInput, columnInput, newValue, location, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [tableInput, columnInput, newValue, location], function(err, result) {
            if (err) throw err;
            cb(result);
        })

        console.log(result);
    } 
}

module.exports = orm;
