import React from "react";

export const MessageError = ({ message = "la información del campo es requerida" }) => {
  return (
    <small className="inline-block w-full text-left text-red-700  text-tiny text-error">
      {message}
    </small>
  );
};
