const MongoClient = require('mongodb').MongoClient;
const { Client } = require('pg')
const client = new Client({connectionString: process.env.DATABASE_URL})

MongoClient.connect(client, (err, db) => {
    if (err) throw err;
    console.log("Database created!!!");
    db.close();
});
server.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});

// ====

// run : node index.js

// ====

// let url = '';