import React , { useEffect, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Filter from "./Components/Filter/Filter";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import data from "./data.json";
function App() {
  const [products , setProducts] = useState(data);
  const [sort , setSort] = useState("");
  const [size , setSize] = useState("");
  const [cartItems , setCartItems] = useState(JSON.parse(localStorage.getItem("cart-items") || []));
  const handleFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value == "all"){
      setProducts(data);
    }else{
      let cloneProducts = [...data];
      let filtredProducts = cloneProducts.filter(item => item.sizes.indexOf(e.target.value) !== -1);
      setProducts(filtredProducts);
    }
  };
  const handleFilterBySort = (e) => {
    setSort(e.target.value);
    let cloneProducts = [...data];
    let newProducts = cloneProducts.sort((a , b) => {
      if (e.target.value === "lowest"){
        return a.price - b.price;
      }else if (e.target.value === "highest"){
        return b.price - a.price;
      }else{
        return a.id < b.id ? 1 : -1;
      };    
    });
    setProducts(newProducts);
  };
  const addToCart = (product) => {
    let cartItemsClone = [...cartItems];
    let isProductExist = false;
    cartItemsClone.forEach(item => {
      if (item.id === product.id){
        item.qty += 1;
        isProductExist = true;
      }
    });
    if (!isProductExist){
      cartItemsClone.push({...product , qty : 1});
    };
    setCartItems(cartItemsClone);
  };
  useEffect(() => {
    localStorage.setItem("cart-items" , JSON.stringify(cartItems));
  },[cartItems]);
  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    const filtredItemsInCart = cartItemsClone.filter(item => item.id !== product.id);
    setCartItems(filtredItemsInCart);
  };
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products 
            products={products} 
            addToCart={addToCart}
          />
          <Filter 
            productsNumber={products.length}
            size={size}
            sort={sort}
            handleFilterBySize={handleFilterBySize}
            handleFilterBySort={handleFilterBySort}
          />
        </div>
        <Cart 
          cartItems={cartItems} 
          removeFromCart={removeFromCart}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
