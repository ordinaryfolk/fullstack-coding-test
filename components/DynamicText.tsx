import React, { forwardRef, useImperativeHandle, useState } from "react";

const DynamicText = forwardRef((props, ref) => {
  const [value, setValue] = useState("Random Text");

  useImperativeHandle(ref, () => ({
    changeValue(newValue) {
      setValue(newValue);
    }
  }));

  return <h1>{value}</h1>;
  }
);

export default DynamicText;
