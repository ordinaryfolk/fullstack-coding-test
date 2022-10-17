import React, { useState } from "react";
import { Text } from "@chakra-ui/react";

const DynamicText = () => {
  const [value, setValue] = useState("Random Textttt");

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  return <Text color="green.200">{value}</Text>;
};

export default DynamicText;
