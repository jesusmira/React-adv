import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

const Product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'

}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
          display: 'flex',
          msFlexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <ProductCard product = { Product }>
              <ProductCard.Image />
              <ProductCard.Title title={'Hola mundo'}/>
              <ProductCard.Buttons/>
          </ProductCard>  
          
          <ProductCard product = { Product }>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
          </ProductCard>  
        </div>

    </div>
  )
}
