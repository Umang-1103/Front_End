import React from 'react'
import ProductList from './ProductList'
import ProductListFilter from './ProductListFilter'
import PlaylistManager from './PlaylistManager'
import LargeList from './LargeList'

function App() {
  return (
    <div>
      {/* <ProductList/> */}
      <ProductListFilter/>
      <PlaylistManager/>
      <LargeList/>
    </div>
  )
}

export default App
