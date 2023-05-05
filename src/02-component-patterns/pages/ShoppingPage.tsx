import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
const Product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
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
          <ProductCard
          className='bg-dark text-white' 
          product = { Product }>
              <ProductCard.Image className='custom-image'/>
              <ProductCard.Title className=' text-bold'/>
              <ProductCard.Buttons className='custom-buttons'/>
          </ProductCard>  
          
          <ProductCard
           className='bg-dark text-white'
          product = { Product }>
              <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
              <ProductTitle className=' text-bold'/>
              <ProductButtons className='custom-buttons' />
          </ProductCard>  
          
          <ProductCard
          style={{
            backgroundColor: '#70D1F8'
          }}
          product = { Product }>
              <ProductImage  style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
              <ProductTitle  style={{ fontWeight: 'bold' }}/>
              <ProductButtons style={{ 
                  display: 'flex',
                  justifyContent: 'end'
              }} />
          </ProductCard>  


        </div>

    </div>
  )
}
