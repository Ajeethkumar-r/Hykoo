import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileEducation = ({
  education: { college, degree, fieldofstudy, current, to, from, description },
}) => (
  <div>
    <h3 className='text-dark'>{college} </h3>
    <p>
      <strong>Position: </strong> {degree}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
    <p>
      {formatDate(from)} - {!to ? 'Now' : formatDate(to)}
    </p>

    <p>{fieldofstudy && <span>{fieldofstudy} </span>}</p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
