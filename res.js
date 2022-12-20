'use strict';
//Menambahkan pemberitahuan jika data sukses
//terupdate atau terkoneksi
exports.ok = function (value, res) {
    var data = {
        'status':200,
        'values':values

    };
     res.json(data);
     res.end();
}