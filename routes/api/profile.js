const express = require('express');
const router = express.Router();
const Profile = require('../../models/Profile');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
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

//@route POST/api/profile
//@desc create or update profile
//@access private
router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required').not().isEmpty(),
      check('skills', 'Skills is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      company,
      website,
      location,
      bio,
      githubusername,
      status,
      skills,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin,
    } = req.body;

    //build up this profilefields to insert into the database
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills)
      profileFields.skills = skills.split(',').map((skill) => skill.trim());

    //build up this profilefields to insert into the database - social
    profileFields.social = {};

    if (youtube) profileFields.social.youtube = youtube;
    if (instagram) profileFields.social.instagram = instagram;
    if (facebook) profileFields.social.facebook = facebook;
    if (twitter) profileFields.social.twitter = twitter;
    if (linkedin) profileFields.social.linkedin = linkedin;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      //Update
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

    //create
    const profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  }
);

module.exports = router;
