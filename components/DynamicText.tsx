import React, { useState } from "react";
import { Heading } from "@chakra-ui/react";

const DynamicText = () => {
  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  return <Heading>{value}</Heading>;
};

export default DynamicText;
