import React, { useState } from 'react';
import Node from '../components/Node';
import '../styles/simple-list.css';

const SimpleList = () => {
  const [listLength, setListLength] = useState(0);

  //Render nodeList
  const renderNodeList = () => {
    const nodeList = [];
    for (let i = 0; i < listLength; i++) {
      nodeList.push(<Node key={i} active={i !== listLength-1}/>);
    }
    return nodeList;
  }

  //Create node
  const createNode = () => {
    setListLength( listLength + 1);
  }

  //Render component
  return (
    <div className="simple-list">
      <button onClick={ createNode }>Criar node</button>
      <div className="node-container">
        {renderNodeList()}
      </div>
    </div>
  )
}

export default SimpleList;