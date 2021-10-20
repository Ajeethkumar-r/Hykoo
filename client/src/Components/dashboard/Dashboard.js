import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

function Dashboard({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large teat-primary'>Develpor</h1>
      <p className='lead'>You don't create a profile yet</p>
      <i className='fas fa-user'>{user && user.name} </i>
    </Fragment>
  );
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
