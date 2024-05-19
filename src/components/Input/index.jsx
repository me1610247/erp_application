import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[30px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    gray_300_5b: "bg-gray-300_5b shadow-xs text-black-900_42",
  },
};
const sizes = {
  xs: "h-[57px] pl-[35px] pr-[3px] text-lg",
  sm: "h-[76px] px-3.5",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e); // Pass the event object
    };

    return (
      <>
        <label
          className={`${className} flex items-center justify-center cursor-text ${(shape && shapes[shape]) || ""} ${
            variants[variant]?.[color] || variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </label>
      </>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "gray_300_5b"]),
};

export { Input };
