import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  ITEMS_LOADING,
} from '../actions/types'

const initalstate = {
  items: [],
  loading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalstate, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      }
    case UPDATE_ITEM:
      //find the index of the original state by the id
      const itemId = state.items.findIndex(
        (item) => item._id === action.payload.id
      )
      let newState = [...state.items]
      newState[itemId] = {
        ...newState[itemId],
        name: action.payload.item.name,
      }
      return { items: newState }

    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
