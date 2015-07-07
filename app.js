var express = require('express');
var app = express();
app.use(express.static('dev'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get("/:name", function (req, res) {
    res.send( "My name is " + req.params.name );
});

var user1 = {
  name: "Sean",
  age: "25"
};
var user2 = {
  name: "Paul",
  age: "25"
};

var book1 = {
  title: "Macbeth"
}
var book2 = {
  title: "One Flew Over the Cucoos Nest"
}
var book3 = {
  title: "Interview with a Vampire"
}
var myUsers = [user1, user2];
var myBooks = [book1, book2, book3];

app.get("/api/users", function (req, res) {
  res.json(myUsers);
})

app.get("/api/books", function (req, res) {
  res.json(myBooks);
})

// $.get('localhost:3000/api/books', function(data) {
// })

var server = app.listen(5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});