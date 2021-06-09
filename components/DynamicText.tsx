import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Heading } from "@chakra-ui/react";

const DynamicText = forwardRef((props, ref) => {
  const [value, setValue] = useState("Random Text");

  useImperativeHandle(ref, () => ({
    changeValue(newValue) {
      setValue(newValue);
    }
  }));

  return <Heading as="h1">{value}</Heading>;
  }
);

export default DynamicText;
