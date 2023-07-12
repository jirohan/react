import React from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App = () => {
  
  return (
    <div className='App'>
      <p>
        <Header />
        <Content />
        <Footer />
      </p>
    </div>
  )
}

export default App