
const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "Malawi0261",
    host: "localhost",
    port: "5432",
    database: "yt_login_system"
});


module.exports = pool;
