import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState< {[key:string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
      // shoppingCart[ product.id] = {...product, count} 
      setShoppingCart( oldShoppingCart => {
          
        if (count === 0 ){
          // toDelete esta preparado para avisar al usuario, por eso marca que no se ha usado
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [product.id]: toDelete, ...rest  } = oldShoppingCart;
          return rest;
        }
  
        return {
          ...oldShoppingCart,
          [product.id]:{ ...product, count }
        }
      })
      
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}
