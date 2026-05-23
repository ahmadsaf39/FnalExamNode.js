import sqlite3 from "sqlite3";

const sqlite = sqlite3.verbose();

export const db = new sqlite.Database(
  "./database/students.db",
  (error) => {
    if (error) {
      console.error(error.message);
    } else {
      console.log(
        "Connected to SQLite database."
      );
    }
  }
);

db.run(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL
  )
`);