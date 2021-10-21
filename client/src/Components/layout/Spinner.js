import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: '100px',
        margin: 'auto',
        display: 'block',
        marginTop: '32.5vh',
      }}
      alt='Loading...'
    />
  </Fragment>
);

export default Spinner;
