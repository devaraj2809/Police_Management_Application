var mysql = require('mysql');
var pool;
module.exports = {
    getPool: function () {
        if (pool) return pool;
        pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'Root123',
            database: 'pma_db',
        });
          return pool;

    }
   
};
