
import Hero from '../components/layout/Hero'
import ProductGrid from '../components/products/ProductGrid'
import products from '../data/products'

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="container">
        <h1 style={{marginBottom:'20px'}}>Featured Products</h1>

        <ProductGrid products={products} />
      </div>
    </div>
  )
}
