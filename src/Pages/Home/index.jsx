import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail"

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.error(err))
  }, [])

    return (
      <Layout>
      home
      <div className="grid gap-2 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map((item) => <Card key={item.id} data={item} />)
        }  
      </div>
        <ProductDetail />
      </Layout>
    )
  }
  
  export default Home