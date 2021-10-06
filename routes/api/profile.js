const express = require('express');
const router = express.Router();
const Profile = require('../../models/Profile');
const auth = require('../../middleware/auth');
const User = require('../../models/User');

//@GET api/profile/me
//@desc get logged in user profile
//@ access private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );
    if (!profile) {
      res.status(400).json({ msg: 'There is no profile for this User' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: 'Server Error' });
  }
});

module.exports = router;
