const express = require('express');
const { faker } = require('@faker-js/faker')
const router = express.Router();


router.get('/', (req, res) => {
  let users = [];
  for (let i = 0; i < 10; i++) {
    users.push({
      name:faker.person.fullName(),
      email:faker.internet.email(),
      phone:faker.phone.number(),
      sex:faker.person.sex()
    });
  }
  res.json(users);
})


router.get('/:id', (req, res) => {
  res.json({
    name:faker.person.fullName(),
    email:faker.internet.email(),
    phone:faker.phone.number(),
    sex:faker.person.sex()
  });
})

module.exports = router;
