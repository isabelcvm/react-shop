import React, {useEffect, useState} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts]= useState([]);
    
        //useEffect es una funcion anonima
        useEffect ( async () => {
            const response= await axios(API);
            setProducts(response.data)
        }, [] ) //el segundo valor [] arreglo vacia, y es parte de la estructura de la api de react
       
        return products;
}

export default useGetProducts;
