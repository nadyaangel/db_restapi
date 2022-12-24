'use strict';

module.exports = function(app){
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index)

    //agar terbaca yang mau ditampilkan dari database
    app.route('/show')
        .get(myjson.showproductdata)    

    //tampil data berdasarkan id
    app.route('/show/:id')
        .get(myjson.showproductdataid)
    
    //tambah data
    app.route('/add')
        .post(myjson.addproduct)

    //ubah data berdasarkan id
    app.route('/change')
        .put(myjson.changeProduct)
}