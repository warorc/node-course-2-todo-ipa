//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
 
  // db.collection('Users').insertOne({
  //   name: 'Vadim',
  //   age: 35,
  //   location: 'Russia',
  // }, (err, res) => {
  //   if(err){
  //     return console.log('Can\'t create users document in MongoDB');
  //   }
  //   console.log(res.ops[0]._id.getTimestamp());
  // });

  client.close();
});