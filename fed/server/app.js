const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
module.exports = app;

const stripe = require("stripe")(
  "sk_test_51L9yoAIILTUpIrN8axb1z8Jx5GFkY9TR9WBS9KJpZkWqWeHNDMxUogPOmTgA2DTsRAdyDy9GHWvKUVrCZx5ym7ZR00bsAEHoq2"
);

// if I am NOT in my production environment, I want access to the secrets.js file inside of my local machine (each dev should have one) --> development, test
if (process.env.NODE_ENV !== "production") require("./secrets");

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());

// auth and api routes
<<<<<<< HEAD
app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

=======
app.use('/auth', require('./auth'));
app.use('/api', require('./api'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

app.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body;
>>>>>>> 2f4c7734fa4a2a236adde63316a1b6f996b7b2f7
  const calculatePrice = (items) => {
    let totalPrice = 0;
    items.forEach((item) => {
      const itemPrice = item.product.price * 100;
      const itemQuantity = item.quantity;
      const itemTotal = itemPrice * itemQuantity;
      totalPrice = totalPrice + itemTotal;
    });
<<<<<<< HEAD
    console.log(totalPrice);
=======
>>>>>>> 2f4c7734fa4a2a236adde63316a1b6f996b7b2f7
    return totalPrice; //totalPrice of our whole cart
  };

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculatePrice(items),
<<<<<<< HEAD
    currency: "usd",
=======
    currency: 'usd',
>>>>>>> 2f4c7734fa4a2a236adde63316a1b6f996b7b2f7
    automatic_payment_methods: {
      enabled: true,
    },
  });
<<<<<<< HEAD

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
  console.log({
    clientSecret: paymentIntent.client_secret,
  });
=======
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
>>>>>>> 2f4c7734fa4a2a236adde63316a1b6f996b7b2f7
});

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
<<<<<<< HEAD
    const err = new Error("Not found");
=======
    const err = new Error('Not found');
>>>>>>> 2f4c7734fa4a2a236adde63316a1b6f996b7b2f7
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
<<<<<<< HEAD
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
=======
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
>>>>>>> 2f4c7734fa4a2a236adde63316a1b6f996b7b2f7
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
<<<<<<< HEAD
  res.status(err.status || 500).send(err.message || "Internal server error.");
=======
  res.status(err.status || 500).send(err.message || 'Internal server error.');
>>>>>>> 2f4c7734fa4a2a236adde63316a1b6f996b7b2f7
});
