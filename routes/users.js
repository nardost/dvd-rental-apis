const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({response: "respond with a JSON"});
});

module.exports = router;
