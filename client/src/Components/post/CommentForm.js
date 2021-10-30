import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addComment } from '../../actions/post';
import { connect } from 'react-redux';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');
  return (
    <div className='posts-form-header'>
      <div className='bg-primary' style={{ borderRadius: '5px' }}>
        <h4 className='p'>Add your opinion</h4>
      </div>
      <form
        className='form my-1'
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <textarea
          cols='30'
          rows='4'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Add Comment'
        ></textarea>
        <input
          type='submit'
          value='Comment'
          style={{ borderRadius: '5px' }}
          className='btn btn-light my-1'
        />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
