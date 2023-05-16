
//Shop Start

const ProductImage = () => {
  return(
    <div className="product-image">
    <img
      src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
    />
  </div>
  )
}

const ProductInfo = () => {
  return(
    <div className="product-info">
      <h5>Winter Jacket</h5>
      <h6>$99.99</h6>
    </div>
  )
}

const ProductCard = () => {
  return(
    <div className="product-card">
      <ProductImage />
      <ProductInfo />
    </div>
  )
}


const Products = () => {
  const productsArray = [1,2,3,4,5,6,7,8,9,10];
  const productsElements = productsArray.map((num) => <ProductCard/>)
  console.log(productsElements);
  return(
    <section className="products">
      {productsElements}
    </section>
  )
}

//headline
const Headline = ()=> {
  return(<h1>Jackets</h1>)
}


//Select
//collection-sort
const CollectionSortFilter = () =>{
  return(
    <div className="collection-sort">
    <label>Filter by:</label>
    <select>
      <option value="/">All Jackets</option>
      <option value="/">2016</option>
      <option value="/">jacket</option>
      <option value="/">Jackets</option>
      <option value="/">layers</option>
      <option value="/">Obermeyer</option>
      <option value="/">Roxy</option>
      <option value="/">womens</option>
    </select>
  </div>
  )
}
//collection-sort
const CollectionSortSort = () =>{
  return(
    <div className="collection-sort">
      <label>Sort by:</label>
      <select>
        <option value="/">Featured</option>
        <option value="/">Best Selling</option>
        <option value="/">Alphabetically, A-Z</option>
        <option value="/">Alphabetically, Z-A</option>
        <option value="/">Price, low to high</option>
        <option value="/">Price, high to low</option>
        <option value="/">Date, new to old</option>
        <option value="/">Date, old to new</option>
      </select>
  </div>
  )
}




//sort
const Sort = () => {
  return(
    <div className="sort">
      <CollectionSortFilter />
      <CollectionSortSort />
    </div>
  )
}



//product-filter
const ProductFilter = () =>{
  return(
    <nav className="sort">
      <Headline />
      <Sort />
    </nav>
  )
}


//Main
const Main = ()=>{
  return(
    <div>
      <ProductFilter />
      <Products />
    </div>
  )
}



ReactDOM.render(<Main />,document.getElementById('app'));
