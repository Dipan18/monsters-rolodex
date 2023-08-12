import './card.styles.css';

type CardProps = {
  className: string;
  imgAlt: string;
  imgSrc: string;
  title: string;
  body: string;
}

const Card = (props: CardProps) => {
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
