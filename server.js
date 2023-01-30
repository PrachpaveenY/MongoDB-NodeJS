const express = require('express');
const webapp = express();
const MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mydb";

const products = [
    {
      id: '01',
      name: 'Node.js',
      category: 'Node',
      price: 299
    },
    {
      id: '02',
      name: 'React',
      category: 'ReactJS',
      price: 99
    },
    {
      id: '03',
      name: 'mongodb',
      category: 'MongoDB',
      price: 99
    }
  ];

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    webapp.get('/products', (req, res) => {
        if (err) throw err;
        res.json(products);
        db.close();
      });
      
      webapp.get('/products/:id', (req, res) => {
        const { id } = req.params;
        const result = products.find((product) => product.id === id);
        if (err) throw err;
        res.json(result);
        db.close();
      });
      
      webapp.post('/products', (req, res) => {
        const payload = req.body;
        if (err) throw err;
        res.json(payload);
        db.close();
      });
      
      webapp.put('/products/:id', (req, res) => {
        const { id } = req.params;
        if (err) throw err;
        res.json({ id });
        db.close();
      });
      
      webapp.delete('/products/:id', (req, res) => {
        const { id } = req.params;
        if (err) throw err;
        res.json({ id });
        db.close();
      });
});

webapp.listen(2566, () => {
    console.log('port 2566');
});

// const MongoClient = require('mongodb').MongoClient;
// const { Client } = require('pg')
// const client = new Client({connectionString: process.env.DATABASE_URL})

// MongoClient.connect(client, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!!!");
//     db.close();
// });
// server.listen(PORT, () => {
//     console.log(`running on port ${PORT}`);
// });
