import React, {createContext,useState} from 'react';
//product images
import speaker from '../assets/8.jpg';
import headphone from '../assets/9.jpg';
import earphone from '../assets/10.jpg';
import laptop from '../assets/11.jpg';
import windows from '../assets/12.jpg';
import joystick from '../assets/13.jpg';
import friz from '../assets/14.jpg';
import led from '../assets/15.jpg';
import washing from '../assets/16.jpg';
import mixer from '../assets/17.jpg';
import aqwa from '../assets/18.jpg';
import heater from '../assets/19.jpg';



export const ProductsContext=createContext();

const ProductsContextProvider=(props)=>{
    const [products] =useState([
        {id:1,name:'Speaker',price:400,image:speaker,status:'hot'},
        {id:2,name:'Headphone',price:500,image:headphone,status:'hot'},
        {id:3,name:'Earphone',price:300,image:earphone,status:'hot'},
        {id:4,name:'Laptop',price:23000,image:laptop,status:'hot'},
        {id:5,name:'Windows',price:40000,image:windows,status:'hot'},
        {id:6,name:'Joystick',price:450,image:joystick,status:'new'},
        {id:7,name:'Friz',price:14000,image:friz,status:'hot'},
        {id:8,name:'LED',price:2440,image:led,status:'hot'},
        {id:9,name:'Washing Machine',price:14500,image:washing,status:'hot'},
        {id:10,name:'Mixer',price:1400,image:mixer,status:'hot'},
        {id:11,name:'Aqwa',price:4200,image:aqwa,status:'new'},
        {id:12,name:'Heater',price:4000,image:heater,status:'hot'}
    ]);
    return(
        <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
    );
}
export default ProductsContextProvider;