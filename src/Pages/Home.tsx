import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { addPockemon, clearPockemons } from "../App/Features";
import Card from "../Components/Card/Card";
import { useAppDispatch, useAppSelector } from "../Hooks/useRedux";
import { useGetPockemonsQuery } from "../Services/FetchData";
import "./Home.css";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const Pockemons = useAppSelector((state) => state.pockemons.value);
  const BASEURL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12";
  const [url, setUrl] = useState(BASEURL);
  const { data } = useGetPockemonsQuery(url);
  const [isSetted, setIsSetted] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (data) {
      for (let index = 0; index < data.results.length; index++) {
        index === 0 && dispatch(clearPockemons());
        axios.get(`${data.results[index].url}`).then((response) => {
          dispatch(addPockemon(response.data));
        });
      }
    }
  }, [data]);
  const onLoadMore = () => {
    setIsActive(false);
    setUrl(data?.next || BASEURL);
    setIsSetted(false);
    setTimeout(() => setIsActive(true), 1500);
  };
  const onCardClick = (ID: number = 0) => {
    setIsSetted(true);
    navigate(`card/${ID}`);
  };
  const onHomePage = () => {
    setIsSetted(false);
    navigate("/");
    setUrl(BASEURL);
  };

  return (
    <div className="Home">
      <header onClick={onHomePage}>
        <h1>Pockedex</h1>
      </header>
      <div className="Content_wrapper">
        <section
          style={{ width: !isActive ? "100%" : "50%" }}
          className="Cards_wrapper"
        >
          {Pockemons &&
            Pockemons.map((el) => (
              <section onClick={() => onCardClick(el.id)}>
                <Card data={el} />
              </section>
            ))}
          <button
            disabled={!isActive}
            onClick={onLoadMore}
            className="Load_button"
          >
            {isActive ? "Load More" : "Loading..."}
          </button>
        </section>
        {isSetted && (
          <section className="InfoCard_wrapper">
            <Outlet />
          </section>
        )}
      </div>
    </div>
  );
};

export default Home;
