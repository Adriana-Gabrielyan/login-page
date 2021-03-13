import React from "react";

const Input = (props) => {
  const { children } = props;
  return (
    <div className="form__group">
      <label className="form__label">{children}</label>
      <input className="form__input" type="text" />
    </div>
  );
};

export default Input;
