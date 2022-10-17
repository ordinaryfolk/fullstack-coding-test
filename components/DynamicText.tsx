import React, { forwardRef, SetStateAction, useImperativeHandle, useState } from "react";
import { Text } from "@chakra-ui/react";

const DynamicText = forwardRef((_props, ref) => {
  const [value, setValue] = useState("Random Textttt");

  useImperativeHandle(
    ref,
    () => {
      return {
        changeValue(newValue: SetStateAction<string>) {
          setValue(newValue);
        },
      };
    },
    []
  );

  return <Text color="green.200">{value}</Text>;
});

export default DynamicText;
