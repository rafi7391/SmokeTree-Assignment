const express = require('express');
const bodyParser = require('body-parser');
const { initDb } = require('./models');
const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);

initDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
