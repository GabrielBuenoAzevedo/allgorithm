import React from 'react';
import '../styles/node.css';

const Node = ({active}) => {
  return (
    <div className="node">
      {
        active ?
          <div className="arrow-right">
          </div>
        : ''
      }
    </div>
  );
}

export default Node;