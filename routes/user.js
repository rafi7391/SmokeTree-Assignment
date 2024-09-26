const express = require('express');
const { User, Address } = require('../models');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, address } = req.body;

  try {
    const user = await User.create({ name });
    await Address.create({ address, userId: user.id });
    res.status(201).send('User and address created successfully');
  } catch (error) {
    res.status(500).send('Error creating user and address');
  }
});

module.exports = router;
