import "./Pagination.css";
import React from "react";

export function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul>
          {pageNumbers.map((number, id) => (
          <div>
            <button key={id} disabled={number -1 === 0} onClick={() => paginate(number -1)} className="paginate">atras</button>
            <lebel className="paginate" >{number}</lebel>
            <button disabled={number +1 === 0} onClick={() => paginate(number +1)}  className="paginate" >adelante</button>
          </div>
        ))} 
        </ul>
      </nav>
    </div>
  );
}


// import {getPokemons} from "../Redux/Actions.js";

// const dispatch = useDispatch()
// const {Pokemons} = useSelector(state=> state)
// const [page,setPage] = useState(1)
    
// useEffect(()=>{
//    dispatch(getPokemons({})) 
// },[dispatch])

// const changePage = (page)=>{
//     dispatch(getPokemons({page}))
//     setPage(page)
// }

/* <button disabled={page -1 === 0} onClick={()=> {changePage(page -1)}}>preview</button>
<label>{page}</label>
<button disabled={characters?.count <= (page * 5)} onClick={()=>{changePage(page +1)}}>next</button> */

