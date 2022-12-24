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

//add data for product
exports.addproduct = function(req, res){
    var name = req.body.name;
    var harga = req.body.harga;
    var deskripsi = req.body.deskripsi;

    connection.query('INSERT INTO produk (name, harga, deskripsi) VALUES (?,?,?)',
    [name, harga, deskripsi],
    function(error, rows, fields){
        if(error){
            console.log(error)
        } else {
            response.ok("Data is added", res)
        }
    })
}

//update data berdasarkan id 
exports.changeProduct = function(req,res){
    var id = req.body.id_product;
    var name = req.body.name;
    var harga = req.body.harga;
    var deskripsi = req.body.deskripsi;

    connection.query('Update mahasiswa SET name=?, harga=?, deskripsi=?' [name, harga, deskripsi],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }
            else{
                response.ok("Data has changed", res)
            }
        } 
    )
}
