import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import ProductDetail from '../../Components/ProductDetail'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import { ShoppingCarContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCarContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>We don't have anything :(</div>
      )
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 mb-4">
        <h1 className="font-medium text-xl">Home</h1>
      </div>
      <input
        className="border border-black p-4 rounded-lg w-80 mb-4 focus:outline-none"
        type="text"
        placeholder="Search a product..."
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-2 grid-cols-4 w-full max-w-screen-lg">{renderView()}</div>
      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  )
}

export default Home
