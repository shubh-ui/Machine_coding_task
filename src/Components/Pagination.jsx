import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)

  const fetchProducts = async () => {
    const data = await fetch(`https://dummyjson.com/products?limit=10&skip=${currentPage * 10}`);
    const productData = await data.json();

    if (productData.products?.length) {
      setProducts(productData.products);
      setTotalPages(Math.floor(productData.total / 10));
    }
  };

  const handleCurrentPage = (type) => {
      if(type == "minus" && currentPage > 1) {
        setCurrentPage(prev => prev - 1);
      }
      else if(type == "plus" &&currentPage < totalPages ){
        setCurrentPage(prev => prev + 1);
      }
  }
  console.log(currentPage);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  return (
    <div className="main_pagination_container">
      <div className="product_container">
      {products.length &&
        products.map((product, i) => {
          return (
            <div key={i} className="product">
              <img src={product.thumbnail} alt={product.title} loading="lazy"/>
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>

      <div className="pagination">
        <span className="prev" onClick={() => handleCurrentPage("minus")}>◀️</span>
        <span className="pagination_count">
          {[...Array(totalPages)].map((_, i) => {
            return (
              <div 
              key={i} 
              className={`page-number ${currentPage === i + 1 ? "active" : ""}`} 
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </div>
            );
          })}
        </span>
        <span className="next" onClick={() => handleCurrentPage("plus")}>▶️</span>
      </div>
    </div>
  );
};

export default Pagination;
