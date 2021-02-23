import React, { useState } from "react";

const DynamicText = () => {
  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  return <h1>{value}</h1>;
};

export default DynamicText;
