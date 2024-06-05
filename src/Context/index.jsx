import { createContext, useEffect, useState } from 'react'

export const ShoppingCarContext = createContext()

export const ShoppingCarProvider = ({ children }) => {
  // Shopping cart . Increment Quantity
  const [count, setCount] = useState(0)

  // Product Detail . Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu . Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Product Detail . Show Product
  const [productToShow, setProductToShow] = useState({})

  // Shopping . Add Products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Cart . Order
  const [order, setOrder] = useState([])

  // Get items
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByCategory, searchByTitle) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }
    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }
    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      )
    }
    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByCategory, searchByTitle))
    if (searchByTitle && !searchByCategory)
      setFilteredItems(filterBy('BY_TITLE', items, searchByCategory, searchByTitle))
    if (!searchByTitle && searchByCategory)
      setFilteredItems(filterBy('BY_CATEGORY', items, searchByCategory, searchByTitle))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByCategory, searchByTitle))


  }, [items, searchByTitle, searchByCategory])

  console.log('searchByTitle ', searchByTitle)
  console.log('searchByCategory ', searchByCategory)
  console.log('filteredItems ', filteredItems)

  return (
    <ShoppingCarContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCarContext.Provider>
  )
}
