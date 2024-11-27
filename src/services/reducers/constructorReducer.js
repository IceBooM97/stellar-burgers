// import { ADD_INGREDIENT, MOVE_INGREDIENT, SET_BUN} from "../actions/ingredient";


// const initialState = {
//   ingredients: [], 
//   buns: null,
// };
  
// function constructorReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_INGREDIENT:
//       return {
//         ...state,
//         ingredients: [...state.ingredients, action.payload],
//       };
//     case SET_BUN:
//       return {
//         ...state,
//         bun: action.payload, 
//     };
//     // case MOVE_INGREDIENT:
//     //   const newIngredients = Array.from(state.ingredients);
//     //   const [movedItem] = newIngredients.splice(action.fromIndex, 1);
//     //   newIngredients.splice(action.toIndex, 0, movedItem);
//     //   return {
//     //     ...state,
//     //     ingredients: newIngredients,
//     //   };
//     default:
//       return state;
//   }
// }
  
//   export default constructorReducer;