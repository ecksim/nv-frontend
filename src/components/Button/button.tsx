import React from "react";

export default function Button({
  hasArrow,
  children,
  type,
}: {
  hasArrow: boolean;
  children: React.ReactNode;
  type: "primary" | "secondary";
}) {
  return (
    <button className={`${type} ${hasArrow ? "hasArrow" : ""}`}>
      {children}
    </button>
  );
}
