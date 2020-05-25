import React from "react";

export default function Title({ title=null, children=null }) {
  return (
    <h3 style={{ flexGrow: 1 }}>
      { title} { children}
    </h3>
  );
}
