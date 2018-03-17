const {MongoClient, ObjectID} = require('mongodb');

const db = "mongodb://localhost:27017/TodoApp";

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db1 = database.db('TodoApp');

  db1.collection('Todos').find({
    _id: new ObjectID('5aad3d5fd31fee67aff1957e')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // database.close();
});
