const express = require('express');
const redis = require('../redis');

const router = express.Router();

const configs = require('../util/config')

let visits = 0

// If the todo count has never been set, set it to zero
redis.getAsync('todo:count').then(result => {
  if (!result) {
    redis.setAsync('todo:count', 0);
  }
})

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const todoCount = await redis.getAsync('todo:count')
  res.json({"added_todos": todoCount})
})

router.post('/redistest/:key', async (req, res) => {
  await redis.setAsync(req.params.key, req.body.value)
  res.send(200);
})

router.get('/redistest/:key', async (req, res) => {
  const value = await redis.getAsync(req.params.key);
  res.send(value);
})

module.exports = router;
