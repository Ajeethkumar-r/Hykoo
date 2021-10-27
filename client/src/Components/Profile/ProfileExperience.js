import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileExperience = ({
  experience: { company, location, title, current, to, from, description },
}) => (
  <div>
    <h3 className='text-dark'>{company} </h3>
    <p>
      <strong>Position: </strong> {title}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
    <p>
      {formatDate(from)} - {!to ? 'Now' : formatDate(to)}
    </p>

    <p>{location && <span>{location} </span>}</p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
