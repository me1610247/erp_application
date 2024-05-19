import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[30px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-white-A700",
    yellow_800: "bg-yellow-800 text-white-A700",
    teal_500: "bg-teal-500 text-white-A700",
  },
};
const sizes = {
  xs: "h-[50px] px-[35px] text-base",
  md: "h-[94px] px-[35px] text-3xl",
  sm: "h-[60px] px-[35px] text-3xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "teal_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer text-white-A700 ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "md", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["bg-green-500", "yellow_800", "teal_500"]),
};

export { Button };
