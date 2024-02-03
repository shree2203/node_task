// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const productRoutes = require('./routes/productRoutes');
//
// const index = express();
//
// index.use(bodyParser.json());
//
// // Connect to the database
// mongoose.connect('mongodb://localhost:27017/myapp', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
//
// // Include routes
// index.use(productRoutes);
//
// const PORT = process.env.PORT || 3000;
// const server = index.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
//
// module.exports = { app: index, server }; // Export the index and server for testing purposes
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
app.use(productRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
