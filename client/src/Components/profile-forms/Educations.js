import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScrollButton from '../Scroll/scrollButton';
import { addEducation } from '../../actions/profile';
import { PROFILE_ERROR } from '../../actions/types';

const Educations = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    college: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const { college, degree, fieldofstudy, from, to, current, description } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, history);
    if (PROFILE_ERROR) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Add Your Education</h1>
      <p className='lead'>
        <i className='fas fa-code-branch' /> Add any college/bootcamp you have
        attend
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* College or Bootcamp'
            name='college'
            value={college}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Degree or Certificate'
            name='degree'
            value={degree}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Field Of Study'
            name='fieldofstudy'
            value={fieldofstudy}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <h4>From Date</h4>
          <input type='date' name='from' value={from} onChange={onChange} />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
              }}
            />{' '}
            Current Job
          </p>
        </div>
        <div className='form-group'>
          <h4>To Date</h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Program Description'
            value={description}
            onChange={onChange}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
      <div>
        {' '}
        <ScrollButton />{' '}
      </div>
    </Fragment>
  );
};

Educations.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(Educations);
