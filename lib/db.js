const db = require('better-sqlite3')('database.sqlite');

const table = db.table('users');

table.create({
  id: { type: 'integer', primaryKey: true },
  name: { type: 'string' },
  email: { type: 'string' },
});