import { useState } from "react";

export default function useFormInput(initalValue) {
  const [value, setValue] = useState(initalValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => setValue("");

  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  return [inputProps, reset];
}
