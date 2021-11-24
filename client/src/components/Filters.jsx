import { OrderType, filterPokemonsByType, getTypes } from "../Redux/Actions.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./Filters.css";

function Order() {
  let dispatch = useDispatch();

  const allTypes = useSelector((store) => store.types);

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  function handleChangeOrder(event) {
    event.preventDefault();
    dispatch(OrderType(event.target.value));
  }

  function handleChangeDiets(event) {
    event.preventDefault();
    dispatch(filterPokemonsByType(event.target.value));
  }

  return (
    <div className="filterContainers">
      <div>
        <select
          className="filter"
          onChange={(event) => handleChangeDiets(event)}
        >
          <option value="All">Types</option>
          {allTypes.map(({name, id}) => (
            <option key={id} value={name}>{name}</option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="filter"
          onChange={(event) => handleChangeOrder(event)}
        >
          <option value="A-Z">Order</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="HighToLow">LowToHigh</option>
          <option value="HighToLow">HighToLow</option>
        </select>
      </div>
    </div>
  );
}

export default Order;
