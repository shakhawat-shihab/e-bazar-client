import React from "react";
import "./index.scss";

type Props = {
  className?: string;
  children: React.ReactNode;
  clickEvent?: () => void;
  size: "small" | "medium" | "large";
};

export default function Button({
  className,
  children,
  clickEvent,
  size,
}: Props) {
  return (
    <button
      className={`button button--${size}  ${className}`}
      onClick={clickEvent}
    >
      {children}
    </button>
  );
}
