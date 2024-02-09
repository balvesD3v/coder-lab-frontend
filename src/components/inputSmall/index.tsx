import React from "react";
import "./styles.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputSmall = ({ ...props }: InputProps) => {
  return <input className="input-small" {...props} />;
};
