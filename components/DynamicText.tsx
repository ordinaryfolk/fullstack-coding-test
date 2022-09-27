import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Heading } from "@chakra-ui/react";

const DynamicText = forwardRef((props, ref) => {
  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => setValue(newValue);

  useImperativeHandle(ref, () => ({ changeValue: changeValue }));

  return <Heading>{value}</Heading>;
});

export default DynamicText;
