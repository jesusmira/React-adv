import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
          <ProductCard
          key={ product.id}
          product = { product }
          initialValues={{
            count: 4,
            maxCount: 10
          }}
          >
            {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              ( { count, reset, increaseBy, maxCount, isMaxCountReached  } ) => (
                <>
                  <ProductImage />
                  <ProductTitle />
                  <ProductButtons />
                  
                </>
              )
            }
              
          </ProductCard>  
        </div>

  )
}
