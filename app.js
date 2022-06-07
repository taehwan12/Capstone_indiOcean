const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

const songs = ['Blowback', 'Free For', 'Soulful', 'Sweetly', 'Tadow', 'Ylang Ylang'];
const artists = ['Galimatias', 'BUD', 'L\'indécis', 'Lord Kael', 'Masego & FKJ', 'FKJ'];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render('index', {songs: songs, artists: artists});
});

app.get("/signin.html", function(req, res){
  res.sendFile(__dirname + "/signin.html");
})

app.post("/", function(req, res){
  let email = req.body.email;
  let password = req.body.password;

  if(email != "admin@gmail.com"){
    res.sendFile(__dirname + "/failure.html");
  }
  if(password != "admin1234"){
    res.sendFile(__dirname + "/failure.html");
  }
  else{
    res.render('mainPage', {songs: songs});
  }
});

app.post("/failure", function(req, res){
  res.redirect("/");
});

app.get("/mainPage.ejs", function(req, res){
  res.render('mainPage', {songs: songs, artists: artists});
})

app.get("/history.html", function(req, res){
  res.sendFile(__dirname + "/history.html");
})

app.get("/playlists.html", function(req, res){
  res.sendFile(__dirname + "/playlists.html");
})
app.get("/profile.html", function(req, res){
  res.sendFile(__dirname + "/profile.html");
})

app.get("/player.ejs", function(req, res){
  res.render('player', {songs: songs, artists: artists});
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on Heroku");
});

//MailChimp
//2f1f9a2ae5f3bf80c4e47cf5bb588ff3-us12
