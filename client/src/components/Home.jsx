import "./Home.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../Redux/Actions.js";
import Card from "./Card.jsx";
import { Pagination } from "./Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const pokemsFilter = useSelector((state) => state.pokemonsFilter);
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.orderBy);

  useEffect(() => {
    dispatch(getPokemons({}));
  }, []);

  const [posts, setPosts] = useState(pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    if (filterBy === "All" && orderBy === "All") {
      setPosts(pokemons);
    } else {
      setPosts(pokemsFilter);
    }
    setCurrentPage(1);
  }, [pokemons, pokemsFilter, filterBy, orderBy]);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container">
      <div className="buttsBox">
        {currentPosts.map(({ id, hp, name, types }) => (
          <Card key={id} image={hp} name={name} id={id} types={types} />
        ))}
      </div>

      <div className="butts">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Home;
