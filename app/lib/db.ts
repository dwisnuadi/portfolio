import "server-only";
import mysql from "mysql2/promise";

export async function getConnection() {
  try {
    console.log("TEST ENV RAW:", process.env);
    console.log("ENV CHECK:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  db: process.env.DB_NAME,
});
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    return connection;
  } 
catch (error: any) {
  console.error("DB ERROR FULL:", {
    message: error.message,
    code: error.code,
    errno: error.errno,
    sqlState: error.sqlState,
  });

  throw new Error("Database connection failed");
}}