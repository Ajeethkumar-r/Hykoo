import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
// import { Button } from '../Scroll/styles';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 180) {
      setVisible(true);
    } else if (scrolled <= 180) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button>
      <FaArrowCircleUp
        className='scroll'
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </button>
  );
};

export default ScrollButton;
