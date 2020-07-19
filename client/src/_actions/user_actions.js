import{  
    FETCH_PRODUCTS ,
    FILTER_PRODUCTS_BY_SIZE ,
  FILTER_PRODUCTS_BY_GENRE, 
  FILTER_PRODUCTS_BY_PRICE ,
  FILTER_PRODUCTS_BY_BRAND ,
  FILTER_PRODUCTS_BY_TYPE ,
} from './types'


export const fetchProducts = () => dispatch =>{
    fetch('http://localhost:8000/products')
    .then(res => res.json())
    .then(data => {
        return dispatch({
            type:FETCH_PRODUCTS,
            payload:data,
        });
    })
}

export const filterBySize = (products , size) => dispatch =>{
    return dispatch({
        type:FILTER_PRODUCTS_BY_SIZE,
        payload:{
            size:size,
            items: size === ''
            ? products : products.filter (a =>a.size.indexOf (size) >= 0 ),
        }
    });
}

export const filterByGenre = (products , genre) => dispatch =>{
    return dispatch({
        type:FILTER_PRODUCTS_BY_GENRE,
        payload:{
            genre:genre,
            items: genre === ''
            ? products : products.filter (a =>a.genre = genre ),
        }
    });
}

export const filterByBrand = (products , brand) => dispatch =>{
    return dispatch({
        type:FILTER_PRODUCTS_BY_BRAND,
        payload:{
            brand:brand,
            items: brand === ''
            ? products : products.filter (a =>a.brand = brand ),
        }
    });
}

export const filterByType = (products , types) => dispatch =>{
    return dispatch({
        type:FILTER_PRODUCTS_BY_TYPE,
        payload:{
            types:types,
            items: types === products.filter (a =>a.types = types ),
        }
    });
}

export const filterByPrice= (products , price) => dispatch =>{
    return dispatch({
        type:FILTER_PRODUCTS_BY_PRICE,
        payload:{
            price:price,
            items: price === ''
            ? products : products.filter (a =>a.price = price ),
        }
    });
}