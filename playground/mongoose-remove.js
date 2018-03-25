const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5ab73bfbf5c2d8badb598e94'}).then((todo) => {

})

Todo.findByIdAndRemove('5ab73bfbf5c2d8badb598e94').then((todo) => {
  console.log(todo);
})