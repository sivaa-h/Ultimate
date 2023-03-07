const router = require("express").Router();
const User = require("../../domain/models/User.model");

router.get('/api/getusers', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    } else {
      res.send(users);
    }
  });
});


module.exports = router;