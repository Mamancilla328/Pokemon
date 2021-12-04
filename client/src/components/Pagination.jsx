import "./Pagination.css";
import React from "react";
import { useState } from "react";


export function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
        { pageNumbers.length > 1 &&
            pageNumbers.map(number => (
                <button onClick={()=>paginate(number)} className='pagination'>{number}</button>
            ))
        }
    </div>
)

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

