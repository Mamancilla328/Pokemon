import "./Detail.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { getDetail } from "../Redux/Actions.js";
import { IoMdArrowBack } from "react-icons/io";

function Recipe(props) {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const pokemon = useSelector((state) => state.pokemon);
  const history = useHistory();

  const goToBack = () => {
    history.goBack();
  };

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  if (!pokemon) {
    return <div> loding...</div>;
  }
  console.log(pokemon)

  return (
    <div>
      <button onClick={goToBack} className="btn">
        <IoMdArrowBack />
      </button>
      <div className="Boxcontainer">
        <div className="CardDetails">
          <div>
            <h2>{pokemon.name}</h2>
          </div>
          <div>
            <img src={pokemon.sprite} alt={pokemon.name} />
          </div>
          <label>
          <strong>ID:</strong>
          </label>
          <div>{pokemon.id}</div>
          <label>
            <strong>Type:</strong>
          </label>
          <div>{pokemon.types}</div>
          <label>
          <strong>HP:</strong>
          </label>
          <div>{pokemon.hp}</div>
          <label>
            <strong>Attack:</strong>
          </label>
          <div>{pokemon.attack}</div>
          <label>
            <strong>Defense:</strong>
          </label>
          <div>{pokemon.defense}</div>
          <label>
            <strong>Speed:</strong>
          </label>
          <div>{pokemon.speed}</div>
          <label>
            <strong>Height:</strong>
          </label>
          <div>{pokemon.height}</div>
        <label>
             <strong>Weight:</strong>
         </label>
         <div>{pokemon.weight}</div>

        </div>
      </div>
    </div>
  );
}

export default Recipe;
