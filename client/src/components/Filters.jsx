import { OrderType, filterPokemonsByType, getTypes, filterCreated } from "../Redux/Actions.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./Filters.css";

function Order() {
  let dispatch = useDispatch();

  const allTypes = useSelector((store) => store.types);

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  function handleChangeDB(event){
    event.preventDefault();
    dispatch(filterCreated(event.target.value))
  }

  function handleChangeOrder(event) {
    event.preventDefault();
    dispatch(OrderType(event.target.value));
  }

  function handleChangeTypes(event) {
    event.preventDefault();
    dispatch(filterPokemonsByType(event.target.value));
  }

  return (
    <div className="filterContainers">
      <div>
        <select
          className="filter"
          onChange={(event) => handleChangeTypes(event)}
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
          <option value="LowToHigh">LowToHigh</option>
          <option value="HighToLow">HighToLow</option>
        </select>
      </div>
      <div>
        <select className="filter" 
        onChange={(event) => handleChangeDB(event)}
        >
          <option value="All">ALL</option>
          <option value="DB">DB</option>
        </select>
      </div>
    </div>
  );
}

export default Order;
