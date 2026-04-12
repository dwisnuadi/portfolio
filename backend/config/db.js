import knex from "knex";

const db = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "portfolio_db", // ganti sesuai database kamu
  },
});

export default db;