import { FC } from "react";
import { Resource } from "../../type/Resource";
import "./Card.css";

type PokemonCardViewData = {
  pokemon: Resource;
};
const Card: FC<PokemonCardViewData> = (props) => {
  const { name, sprites, types, weight, height, abilities } = props.pokemon;
  return (
    <div className="card">
      <div className="cardImg">
        <img src={sprites.front_default} alt=""></img>
      </div>
      <h3 className="cardName">{name}</h3>
      <div className="cardType">
        <div>タイプ</div>
        {types.map((type, index) => {
          return (
            <div key={index}>
              <span className="typeName">{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ：{weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ：{height}</p>
        </div>
        <div className="cardData">
          <p className="title">特性：{abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
