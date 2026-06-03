
import { FaShoppingCart } from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container" style={{display:'flex',justifyContent:'space-between'}}>
        <h2>SACH</h2>
        <div>
          <FaShoppingCart size={22} />
        </div>
      </div>
    </div>
  )
}
