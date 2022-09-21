import { FC } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../Hooks/useRedux";
import "./InfoCard.css";
interface InfoCardProps {}

const InfoCard: FC<InfoCardProps> = () => {
  const { id } = useParams();
  const pockemons = useAppSelector((state) => state.pockemons.value);
  const pockemon = pockemons?.find((el) => el.id == id);
  return (
    <>
      {id ? (
        <section className="InfoCard">
          <figure>
            <img
              width="200px"
              height="200px"
              src={
                pockemon?.sprites?.other?.["official-artwork"]?.front_default
              }
              alt=""
            />
            <figcaption className="InfoCard_title">
              {pockemon?.name} | #{pockemon?.id}
            </figcaption>
          </figure>
          <table className="InfoCard_Table">
            <tr>
              <th>Type</th>
              <th>Fire</th>
            </tr>
            {pockemon?.stats?.map((stat) => (
              <tr>
                <td>{stat.stat?.name}</td>
                <td>{stat.base_stat}</td>
              </tr>
            ))}
            <tr>
              <td>Weight</td>
              <td>{pockemon?.weight}</td>
            </tr>
            <tr>
              <td>Total moves</td>
              <td>{pockemon?.moves?.length}</td>
            </tr>
          </table>
        </section>
      ) : (
        <section>
          <h1>123123</h1>
        </section>
      )}
    </>
  );
};

export default InfoCard;
