import React from "react";
import "./styles.scss";

interface InputProps {
  title: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const InputSmall: React.FC<InputProps> = ({ title, onClick }) => {
  return (
    <a className="input-small" type="button" onClick={onClick}>
      {title}
    </a>
  );
};
