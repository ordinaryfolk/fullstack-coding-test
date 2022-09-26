import React, { useState, forwardRef, useImperativeHandle } from "react";

const DynamicText = forwardRef((props, ref) => {
  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  useImperativeHandle(ref, () => ({
    changeValue,
  }));

  return <h1>{value}</h1>;
});

export default DynamicText;
