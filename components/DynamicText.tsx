import { Text } from "@chakra-ui/react";
import React, { forwardRef, useImperativeHandle, useState } from "react";

const DynamicText = forwardRef((props, ref) => {
  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue: string) => {
    setValue(newValue);
  };

  useImperativeHandle(ref, () => {
    return {
      changeValue: changeValue,
    };
  });

  return <Text maxW={'90vw'} fontSize="lg">{value}</Text>;
});

export default DynamicText;
