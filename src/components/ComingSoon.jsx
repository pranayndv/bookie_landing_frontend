import React from 'react';
import './styles/animate.css'; // Make sure the CSS file is correctly imported

const ComingSoon = () => {
  return (
    <div className='h-[90vh] flex justify-center items-center workSans font-bold'>
      <div className="waviy workSans">
        <span style={{ '--i': 1 }}>C</span>
        <span style={{ '--i': 2 }}>o</span>
        <span style={{ '--i': 3 }}>m</span>
        <span style={{ '--i': 4 }}>i</span>
        <span style={{ '--i': 5 }}>n</span>
        <span style={{ '--i': 6 }}>g</span>
        <span >&emsp;</span>
        <span style={{ '--i': 7 }}>S</span>
        <span style={{ '--i': 8 }}>o</span>
        <span style={{ '--i': 9 }}>o</span>
        <span style={{ '--i': 10 }}>n</span>
      </div>

    </div>
  );
};

export default ComingSoon;
