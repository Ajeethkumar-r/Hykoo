import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';

const ExperienceList = ({ experience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td> {exp.company} </td>
      <td className='hide-sm'> {exp.title} </td>
      <td className='hide-sm'>
        {formatDate(exp.from)} - {exp.to === null ? ' Now' : formatDate(exp.to)}
      </td>
      <td>
        <button className='btn btn-danger'>Delete</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Time Period</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

ExperienceList.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ExperienceList;
