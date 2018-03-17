const MongoClient = require('mongodb').MongoClient;


const db = "mongodb://localhost:27017/TodoApp";

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db1 = database.db('TodoApp');
  db1.collection('Todos').insertOne({
    text: 'Walk the dog',
    completed: true
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // // Insert new doc into Users (name, age, location)
  // db1.collection('Users').insertOne({
  //   name: 'Andrew',
  //   age: 25,
  //   location: 'Philadelphia'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(result.ops);
  // });

  database.close();
});
