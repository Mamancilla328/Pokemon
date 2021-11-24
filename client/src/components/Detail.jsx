// import "./Detail.css";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";
// import { getRecipe } from "../Redux/Actions.js";
// import { IoMdArrowBack } from "react-icons/io";

// function Recipe(props) {
//   const dispatch = useDispatch();
//   const id = props.match.params.id;
//   const recipe = useSelector((state) => state.recipe);
//   const history = useHistory();

//   const goToBack = () => {
//     history.goBack();
//   };

//   useEffect(() => {
//     dispatch(getRecipe(id));
//   }, []);

//   if (!recipe) {
//     return <div> loding...</div>;
//   }
//   console.log(recipe)

//   return (
//     <div>
//       <button onClick={goToBack} className="btn">
//         <IoMdArrowBack />
//       </button>
//       <div className="Boxcontainer">
//         <div className="CardDetails">
//           <div>
//             <h2>{recipe.name}</h2>
//           </div>
//           <div>
//             <img src={recipe.image} alt={recipe.name} />
//           </div>
//           <label>
//             <strong>Diets:</strong>
//           </label>
//           <div>{recipe.diets?.join(", ")}</div>
//           <label>
//             <strong>Dish type:</strong>
//           </label>
//           <div>{recipe.dishTypes}</div>
//           <label>
//             <strong>Summary:</strong>
//           </label>
//           <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
//           <label>
//             <strong>Score:</strong>
//           </label>
//           <div>{recipe.score}</div>
//           <label>
//             <strong>Healthscore:</strong>
//           </label>
//           <div>{recipe.healthScore}</div>
//           {!!recipe.instructions && (
//             <>
//               <label>
//                 <strong>Instructions:</strong>
//               </label>
//               <div>{recipe.instructions}</div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Recipe;
