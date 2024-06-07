var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const http = require("http");
require("dotenv").config();
const { connectToMongoDB } = require("./db/db");
const cors = require("cors");
const session = require("express-session");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var prodRouter = require("./routes/prod");
const favorite=require('./routes/favorite')
const order=require('./routes/order')

var app = express();
const stripe = require("stripe") (
  'sk_test_51POTPLP85jGOwS9rC4beh5WQvmHz5Ld9kpzNp6gtktZgPVf9bTlgGucqHFMMU3jIq8CwhpoebJLsNvFniRY6Vwzv00CtK4y0Wc'
);
app.post("/create-payment-intent", async (req, res) => {
  const { amount,productName } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      productName:'',
      currency: 'usd',
    });
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
  });


app.get("/success", (req, res) => {
    res.send("Payment Successful! Thank you for your purchase.");
  });
    // Cancel route
app.get("/cancel", (req, res) => {
    res.send("Payment Canceled. Your order was not processed.");
  });
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.options("*", cors()); // Handle preflight requests
app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/prod", prodRouter);
app.use('/favorite',favorite);
app.use('/order',order);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json("error");
});

const server = http.createServer(app);
server.listen(5001, () => {
  connectToMongoDB();
  console.log("app is runing on port 5000 ");
});
