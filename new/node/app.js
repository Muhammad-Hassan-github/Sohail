const path = require('path');
const express = require('express')
const server = express();
CircularJSON = require('circular-json')
var cors = require('cors')
server.use(cors())
var bodyParser = require("body-parser");
// server.use(express.static('./build'))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())


// ----- Data Base start ---------
// ---------local link start-------
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/MernBank', { useNewUrlParser: true });
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log("Database Connncted.");
// });
// ---------local link end-------



// ------online link start---------
var mongoose = require('mongoose');
// mongodb+srv://hassanMernBank:<password>@mernbank-kjzax.mongodb.net/test?retryWrites=true&w=majority
const MONGODB_URI = 'mongodb+srv://hassanMernBank:jamiaLESSSTRONG25818!@mernbank-kjzax.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected with Cluster');
});
// ------online link start---------



var Transactions = new mongoose.Schema({
  amount: Number,
  time: String,
  account_ID: String,
  type: String,
  discription: String
});
var persons = new mongoose.Schema({
  amount: Number,
  name: String,
  time: String,
  type: String,
  accountID: Number,
  discription: String,
});

var Transaction = mongoose.model('Transactions', Transactions);
// var team = mongoose.model('teams', teams);
var person = mongoose.model('persons', persons);

// --------- Party  start ---------

server.post('/createTransaction', function (req, res) {
  console.log(req.body)
  const newTransaction = req.body.data;
  var addTransaction = new Transaction(newTransaction);
  addTransaction.save(function (error, result) {
    console.log(error)
    console.log(result)
    res.send(result)
  });
});
server.post('/withdraw', function (req, res) {
  console.log(req.body)
  var query = { _id: req.body._ID };
  person.findOneAndUpdate(query, { $inc: { amount: -req.body.amount } }, function (err, result) {
    if (err)
      return console.error(err);
    console.log(result)
  })
});
server.post('/debits', function (req, res) {
  Transaction.find({ type: "Withdraw" }, function (err, result) {
    if (err)
      return console.error(err);
    console.log(result)
    res.send(result)
  })
});
server.post('/credits', function (req, res) {
  Transaction.find({ type: "Deposit" }, function (err, result) {
    if (err)
      return console.error(err);
    console.log(result)
    res.send(result)
  })
});
server.post('/deposit', function (req, res) {
  console.log(req.body)
  var query = { _id: req.body._ID };
  person.findOneAndUpdate(query, { $inc: { amount: req.body.amount } }, function (err, result) {
    if (err)
      return console.error(err);
    console.log(result)
  })
});
server.get('/getAllTransactions', function (req, res) {
  Transaction.find(function (err, result) {
    if (err)
      return console.error(err);
    // console.log(result)
    res.send(result)
  });
});
server.delete('/deleteParty/:Id', function (req, res) {
  party.deleteOne({ _id: req.param.Id }, function (err, result) {
    if (err)
      return console.error(err);
    console.log(result)
  });
  res.send("party Deleted.")
});
server.post('/updateParty/:id', function (req, res) {
  var query = { _id: req.param.id };
  party.findOneAndUpdate(query, { name: req.body.name }, function (err, result) {
    if (err)
      return console.error(err);
    console.log(result)
  })
  res.send("party Updated.")
});
server.get('/getParties', function (req, res) {
  party.find(function (err, result) {
    if (err)
      return console.error(err);
    // console.log(result)
    res.send(result)
  });
});
server.get('/getPartyById/:partyId', function (req, res) {
  party.find({ _id: req.params.partyId }, function (err, result) {
    if (err)
      return console.error(err);
    // console.log(result)
    res.send(result)
  });
});
// --------- Party  End ---------


// --------- Person  start ---------

server.get('/account/:_id', function (req, res) {
  person.deleteOne({ _id: req.params._id }, function (err, result) {
    if (err)
      return console.error(err);
    console.log(result)
  });
  res.send(result)
});

server.post('/createPerson', async function (req, res) {
  console.log(req.body)
  const newPerson = req.body.data;
  var addPerson = new person(newPerson);
  addPerson.save(function (error, result) {
    console.log(error)
    res.send(result)
  });
});
server.post('/deletePerson', async function (req, res) {
  await person.deleteOne({ _id: req.body.data._id }, function (err, result) {
    if (err)
      return console.error(err);
    console.log("person")
  });
  await Transaction.deleteMany({ account_ID: req.body.data._id }, function (err, result) {
    if (err)
      return console.error(err);
    console.log("transaction")
  });
  res.send("person Deleted.")
});

server.post('/updatePerson', function (req, res) {
  var ID = { _id: req.body.data._id }
  var obj = req.body.data
  person.findOneAndUpdate(ID, obj, function (err, result) {
    if (err)
      return console.error(err);
    console.log(result)
    res.send("person Updated.")
  })
});
server.get('/getAllAccounts', function (req, res) {
  person.find(function (err, result) {
    if (err)
      return console.error(err);
    // console.log(result)
    res.send(result)
  });
});
server.get('/getPersonById/:personId', function (req, res) {
  person.find({ _id: req.params.personId })
    .populate('party')
    .populate('team')
    .exec(function (error, posts) {
      console.log(JSON.stringify(posts))
      res.send((posts))
    })
});

server.get('/getPersonsByParties/:partyId', function (req, res) {
  person.find({ party: req.param.partyId })
    .populate('party')
    .populate('team')
    .exec(function (error, posts) {
      console.log(JSON.stringify(posts))
      res.send((posts))
    })
});
// --------- Person  End ---------

// ----- Data Base End -----------

// if (process.env.NODE_ENV === 'production') {
  server.use(express.static('./client/build'));
  server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
  // }

const port = process.env.PORT || 4000
server.listen(port, () => {
  console.log('Example app listening on port 4000!')
});