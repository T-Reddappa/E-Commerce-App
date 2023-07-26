import React, { useContext } from "react";
import "./productListing.css";
import { ProductContext } from "../../context/productContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductFilters from "../../components/productFilters/ProductFilters";
import Loading from "../../components/loading/Loading";
import { useEffect } from "react";

const ProductListingPage = () => {
  const {
    productState,
    productDispatch,
    sortByPrice,
    sortByRating,
    isLoading,
    filterBySize,
    setIsLoading,
    filterBySearchInput,
    filteredByCategory,
  } = useContext(ProductContext);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          {/* <div className="list-of-products">
            Products Displayed ({filterBySize.length})
          </div> */}
          <div className="product-page-container">
            <div className="product-page-filter-component">
              <ProductFilters />
            </div>

            <div className="products-container">
              {filterBySize.length < 1 ? (
                <div className="empty-container">
                  Sorry! No product matches your preferences.
                </div>
              ) : (
                sortByRating.map((product) => {
                  return <ProductCard product={product} />;
                })
              )}
            </div>
          </div>
        </div>
      )}
      {/* <span onClick={() => console.log(productState.selectedCategory)}>
        sorted
      </span> */}
      {/* <p className="header">Product Listing Page</p> */}
    </div>
  );
};

export default ProductListingPage;
