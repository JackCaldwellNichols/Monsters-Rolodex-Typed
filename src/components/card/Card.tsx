import "./card.css";
import { Monster } from "../../App";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
      <h2>{monster.name}</h2>
      <span>{monster.email}</span>
    </div>
  );
};

export default Card;
