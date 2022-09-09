import React, { useState, useRef, useEffect } from "react";

import { StyledInput } from "./Input.style";

const Input = ({ type, text, id, func }) => {
  const [message, setMessage] = useState("");
  const [initial, setInitial] = useState(true);

  const input = useRef();

  function handleChange() {
    setInitial(false);
    if (!initial) {
      setMessage("");
      switch (type) {
        case "email":
          const value = input.current.value;
          if (
            value.includes("@") &&
            value.includes(".com" || ".lt" || ".net" || ".org")
          ) {
            setMessage("");
            break;
          } else {
            setMessage("Email must be valid");
            break;
          }
        case "name":
          break;
      }
    }
  }

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <>
      <StyledInput
        type={type}
        ref={input}
        id={id}
        onChange={handleChange || func}
      >
        {text}
      </StyledInput>
      <p>{message && message}</p>
    </>
  );
};

export default Input;
