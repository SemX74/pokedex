import { FC } from "react";
import { Pockemon } from "../../Services/Interfaces";
import { findTypeColor } from "../../Services/PockemonTypes";
import "./Card.css";
interface CardProps {
  data: Pockemon;
}

const Card: FC<CardProps> = ({ data }) => {
  return (
    <section className="Card">
      <figure>
        <img
          className="Card_Image"
          width="150px"
          height="150px"
          src={data && data.sprites?.other?.["official-artwork"]?.front_default}
          alt=""
        />
        <figcaption className="Card_title">{data.name}</figcaption>
      </figure>
      <section className="Card_Types_wrapper">
        {data &&
          data.types?.map((el) => (
            <div
              style={{
                backgroundColor: `${findTypeColor(el.type?.name)}`,
              }}
              className="Card_Type"
            >
              <span>{el.type?.name}</span>
            </div>
          ))}
      </section>
    </section>
  );
};

export default Card;
