import React , { useState } from "react";
import Filter from "./Components/Filter/Filter";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import data from "./data.json";
function App() {
  const [products , setProducts] = useState(data);
  const [sort , setSort] = useState("");
  const [size , setSize] = useState("");
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

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter 
            size={size}
            sort={sort}
            handleFilterBySize={handleFilterBySize}
            handleFilterBySort={handleFilterBySort}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
