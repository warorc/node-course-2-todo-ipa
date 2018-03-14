//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5aa874174885c89143aa059c")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });
  
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5aa757ff8002732f9cf2a551')}, {
      $set: {
        name: 'Vadim'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((res) => {
    console.log(res);
  });

  
});
