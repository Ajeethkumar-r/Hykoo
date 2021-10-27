import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => (
  <div className='profile-about p-2 bg-light'>
    {bio && (
      <Fragment>
        <h1 className='large text-primary'>
          {name.trim().split(' ')[0]}'s Bio
        </h1>
        <p className='lead'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ea,
          quisquam accusantium, eaque, blanditiis natus earum distinctio amet
          neque in dolorum. Odio minima quia doloribus placeat molestiae ratione
          ipsa sequi!
        </p>
      </Fragment>
    )}

    <div className='line'></div>
    <h2 className='text-primary'>Skill Set</h2>
    <div className='skills'>
      {skills.map((skill, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check'></i> {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
