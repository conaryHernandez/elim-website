import React from 'react';

const Button = props => {
  return <button {...props}>{props.children}</button>;
};

Button.defaultProps = {
  className: 'button',
  sizeBtn: 'small',
  color: 'primary',
  block: false
};

export default Button;
