import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { ProductProvider } from '../contexts/ProductContext'

const Home = () => {


  return (
    <div>
      <ProductProvider>
        <Header />
        <ProductCard />
      </ProductProvider>
    </div>
  )
}

export default Home