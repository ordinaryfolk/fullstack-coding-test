import React, { forwardRef, SetStateAction, useImperativeHandle, useState } from "react";
import { Text, Box } from "@chakra-ui/react";

const DynamicText = forwardRef((_props, ref) => {
  const [value, setValue] = useState<string>("Random Text");

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

  return (
    <Box mt="50">
      <Text color="green.200" w={[300, 400, 480]} fontSize="20px">
        {value}
      </Text>
    </Box>
  );
});

export default DynamicText;
