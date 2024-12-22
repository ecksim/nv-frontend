import React from "react";

export default function Button({
  target,
  type = "primary",
  hasArrow,
  children,
}: {
  target: string;
  type: "primary" | "secondary";
  hasArrow?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a href={target} className={`button ${type} ${hasArrow ? "hasArrow" : ""}`}>
      {children}
    </a>
  );
}
