const router = require("express").Router();
const User = require("../../domain/models/User.model");

router.get('/getusers', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    } else {
      res.send(users);
    }
  });
});

router.post("/postusers", (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  user
    .save()
    .then((_) => {
      res.json({ success: true, message: "User added" });
    })

    .catch((err) => {
      res.json({ success: false, message: " Failed" });
    });
});

module.exports = router;