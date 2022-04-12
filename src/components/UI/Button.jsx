import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cssHelper from '../../utils/css.helper';

const classes = {
  base: 'focus:outline-none transition ease-in-out duration-300',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: {
    true: 'rounded-full',
    false: 'rounded',
  },
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-3 py-1',
    large: 'px-4 py-2 text-lg',
  },
  variant: {
    primary:
      'bg-blue-500 active:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white',
    secondary:
      'bg-gray-200 active:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
    danger:
      'bg-red-500 active:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
  },
};

const Button = forwardRef(
  (
    {
      children,
      type = 'button',
      className,
      variant = 'primary',
      size = 'normal',
      pill,
      disabled = false,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type} // eslint-disable-line react/button-has-type
      className={cssHelper.cls(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${pill ? classes.pill.true : classes.pill.false}
                ${disabled && classes.disabled}
                ${className}
            `)}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf('button', 'submit', 'reset'),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  variant: 'primary',
  size: 'normal',
  pill: false,
  disabled: false,
};

export default Button;
