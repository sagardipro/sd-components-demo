import React from "react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

const Button: FC<Props> = ({ children }) => {
  return <button>Button</button>;
};

export default Button;
