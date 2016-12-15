import React from 'react';

const Thumb = (props) => {
  const thumbClass = props.currentUser ? "user-icon large" : "user-icon small";

  return (
    <div className={ thumbClass }>
      <img src={ props.imageURL } />
    </div>
  );
};

export default Thumb;
