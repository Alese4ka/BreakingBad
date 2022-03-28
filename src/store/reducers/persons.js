import { ADD_PERSON } from "../actionTypes/persons";
 
const initialState = {
  persons: []
};
 
function persons(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON: {
      return {
        ...state,
        persons: [...state.persons, {
          id: uuid4(),
          name: action.payload.name,
          birthday: action.payload.birthday,
          img: action.payload.img,
          status: action.payload.status,
        }]
      }
    }
    default:
      return state;
    }
  }
  export default persons;