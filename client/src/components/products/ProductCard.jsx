
export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        style={{width:'100%',height:'220px',objectFit:'cover',borderRadius:'10px'}}
      />

      <h3 style={{marginTop:'10px'}}>{product.name}</h3>
      <p style={{margin:'10px 0'}}>Category: {product.category}</p>
      <h2>${product.price}</h2>

      <button className="btn" style={{marginTop:'10px'}}>
        Add To Cart
      </button>
    </div>
  )
}
