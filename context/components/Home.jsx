import React, { useState } from 'react'
import faker from 'faker';

const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  })); 

  const [products] = useState(productsArray)

  return (
    <div className='productContainer'>
      {productsArray}
    </div>
  ) 
};

export default Home