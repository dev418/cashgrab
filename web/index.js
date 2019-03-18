const express = require("express"),
      bodyParser = require("body-parser"),
      cookieParser = require("cookie-parser"),
      session = require("express-session"),
      handlebars = require("express-handlebars");
const app = express();

app.engine("handlebars", handlebars());

app.set("view engine", "handlebars");
app.set("views", `${__dirname}/public`);

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use(express.static(`${__dirname}/static`));
app.use(require("./router"));

app.listen(80);