'use strict';
//Menambahkan pemberitahuan jika data sukses
//terupdate atau terkoneksi
exports.ok = function (values, res) {
    var data = {
        'status':200,
        'values':values

    };
     res.json(data);
     res.end();
}