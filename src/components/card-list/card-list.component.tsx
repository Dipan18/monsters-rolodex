import Card from '../card/card.component';

import {Monster} from '../../App';

import './card-list.styles.css';

type CardListProps = {
  monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => (
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
