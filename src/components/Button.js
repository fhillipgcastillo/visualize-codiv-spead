import React from 'react';

export default function Button (props) {
  return (
    <button style={{padding: 10, borderRadius: 5, borderColor: "transparent"}} onClick={props.onClick}>{props.children}</button>
  );
};

