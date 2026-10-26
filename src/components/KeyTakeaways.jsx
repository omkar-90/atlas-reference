import React from 'react';
import Admonition from './Admonition';

export default function KeyTakeaways({ children, title = "Key Takeaways" }) {
  return (
    <Admonition type="info" title={title}>
      {children}
    </Admonition>
  );
}
