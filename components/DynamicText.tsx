import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Text, Stack } from "@chakra-ui/react";

const DynamicText = forwardRef((props, ref) => {
  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => setValue(newValue);

  useImperativeHandle(ref, () => ({ changeValue: changeValue }));

  return (   
      <Stack spacing={2}>
        <Text fontSize="xl" maxWidth={180}>{value}</Text>;
      </Stack>   
  )
});

export default DynamicText;
