import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState< {[key:string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
      // shoppingCart[ product.id] = {...product, count}
  
  
      setShoppingCart( oldShoppingCart => {
        
        const ProductInCart : ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0}
  
        if( Math.max( ProductInCart.count + count, 0) > 0){
          ProductInCart.count += count;
          return {
              ...oldShoppingCart,
              [product.id]:ProductInCart
          }
        }
  
        // Borrar el producto (toDelete esta preparado para avisar al usuario, por eso marca que no se ha usado)
          const { [product.id]: toDelete, ...rest  } = oldShoppingCart;
          return rest;
  
        // if (count === 0 ){
        //   // toDelete esta preparado para avisar al usuario, por eso marca que no se ha usado
        //   const { [product.id]: toDelete, ...rest  } = oldShoppingCart;
        //   return rest;
        // }
  
        // return {
        //   ...oldShoppingCart,
        //   [product.id]:{ ...product, count }
        // }
      })
      
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}
