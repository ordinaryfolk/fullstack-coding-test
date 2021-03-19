import React, { useState, useImperativeHandle, forwardRef } from "react";
import { Text } from "@chakra-ui/react";

const DynamicText = forwardRef((_, ref) => {
  const [value, setValue] = useState("Random Text");
  const changeValue = (newValue) => {
    setValue(newValue);
  };
  useImperativeHandle(ref, () => ({
    changeValue,
  }));
  return (
    <Text fontSize="2xl" width={300} textAlign="center">
      {value}
    </Text>
  );
});

export default DynamicText;
