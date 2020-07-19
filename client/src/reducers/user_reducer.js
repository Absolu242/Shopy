import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  FILTER_PRODUCTS_BY_GENRE,
  FILTER_PRODUCTS_BY_PRICE,
  FILTER_PRODUCTS_BY_BRAND,
  FILTER_PRODUCTS_BY_TYPE,
} from '../_actions/types';

const initialState = {
  items: [],
  filteredItems: [],
  size: '',
  price: '',
  genre: '',
  brand: '',
  type: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size,
      };
    case FILTER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        price: action.payload.price,
      };

    case FILTER_PRODUCTS_BY_BRAND:
      return {
        ...state,
        filteredItems: action.payload.items,
        brand: action.payload.brand,
      };

    case FILTER_PRODUCTS_BY_GENRE:
      return {
        ...state,
        filteredItems: action.payload.items,
        genre: action.payload.genre,
      };

    case FILTER_PRODUCTS_BY_TYPE:
      return {
        ...state,
        filteredItems: action.payload.items,
        types: action.payload.types,
      };
      default:
        return state;
  }
 
}
