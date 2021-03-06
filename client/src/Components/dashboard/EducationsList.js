import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { deleteEducation } from '../../actions/profile';
import { connect } from 'react-redux';

const EducationsList = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td> {edu.college} </td>
      <td className='hide-sm'> {edu.degree} </td>
      <td className='hide-sm'>
        {formatDate(edu.from)} - {edu.to === null ? ' Now' : formatDate(edu.to)}
      </td>
      <td>
        <button
          onClick={() => deleteEducation(edu._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  if (education === []) {
    <Fragment>Share profilic education here</Fragment>;
  }

  return (
    <Fragment>
      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>College</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Time Period</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

EducationsList.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(EducationsList);
