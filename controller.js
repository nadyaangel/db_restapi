'use strict';

var response = require('./res');
var connection = require('./koneksi');
const { connect } = require('./koneksi');

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

//menampilkan data product berdasarkan id
exports.showproductdataid= function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM produk WHERE id_product = ?', [id], 
    function(errors, rows, fields){
        if(errors){
            connection.log(error);
            
        }else{
            response.ok(rows, res)
        }
    })
}