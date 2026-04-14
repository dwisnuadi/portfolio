import knex from "knex";

const db = knex({
  client: "mysql2",
  connection: {
    localhost : "http://localhost:3001",
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "portfolio_db",
  },
});

export default db;  