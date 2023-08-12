import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return (
        <Card
          key={monster.id}
          className="card-container"
          imgAlt={`monster ${monster.name}`}
          imgSrc={`https://robohash.org/${monster.id}?set=2&size=180x180`}
          title={monster.name}
          body={monster.email}
        />
      );
    })}
  </div>
);

export default CardList;
