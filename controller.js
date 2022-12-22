'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("REST API connected",res)
}

//menampilkan semua data product

exports.showproductdata = function(req,res){
    connection.query("SELECT * FROM produk", function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows,res);
        }
    })
}