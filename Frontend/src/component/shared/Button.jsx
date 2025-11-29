import PropTypes from 'prop-types';
import { memo } from 'react';

const Button = (props) => {
  const { type, children, Css, Method,  ...rest } = props;

  return (
      <button
        type={type}
        className={`text-sm font-primary bg-primary-200 rounded-sm text-white px-4 py-1 cursor-pointer ${Css}`}
        onClick={Method}
        {...rest}
      >
        {children}
      </button>
  );
};

Button.propTypes = {
  Css: PropTypes.string,
  Method: PropTypes.func,
  children: PropTypes.node.isRequired,
  BgFill: PropTypes.bool,
  type : PropTypes.string
};

export default memo(Button);
