import { useContext } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCarContext } from '../../Context'
import { useParams } from 'react-router-dom'

const Category = () => {
  const context = useContext(ShoppingCarContext)
  let { category } = useParams();

  const renderView = () => {
    context.setSearchByCategory(category)
  }

  renderView()
  console.log('category: ', context.filteredItems);

  return <Layout>
    <p>Hooola</p>
  </Layout>
}

export default Category
