const {MongoClient, ObjectID} = require('mongodb');

const db = "mongodb://localhost:27017/TodoApp";

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db1 = database.db('TodoApp');

  db1.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
      console.log(result);
   });
   
  // database.close();
});
