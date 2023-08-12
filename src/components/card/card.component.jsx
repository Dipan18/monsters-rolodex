import { Component } from 'react';

import './card.styles.css';

const Card = (props) => {
  const { className, imgAlt, imgSrc, title, body } = props;
  return (
    <div className={className}>
      <img alt={imgAlt} src={imgSrc} />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Card;
