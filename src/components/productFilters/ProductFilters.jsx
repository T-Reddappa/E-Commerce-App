import React, { useContext } from "react";
import "./productFilters.css";
import { ProductContext } from "../../context/productContext";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const ProductFilters = () => {
  const { productState, productDispatch } = useContext(ProductContext);

  const productCategories = productState.products.reduce(
    (acc, { category }) =>
      acc.includes(category) ? [...acc] : [...acc, category],
    []
  );

  const productSizes = productState.products.reduce((acc, { size }) => {
    if (Array.isArray(size)) {
      size.forEach((s) => {
        if (!acc.includes(s)) {
          acc.push(s);
        }
      });
    } else {
      if (!acc.includes(size)) {
        acc.push(size);
      }
    }
    return acc;
  }, []);

  return (
    <div>
      <div className="filters-container">
        <div className="filter-head">
          <b onClick={() => console.log(productSizes)}>Filters</b>
          <span
            onClick={() =>
              productDispatch({
                type: "CLEAR_FILTERS",
                payload: {
                  products: productState.products,
                  categories: productState.allCategories,
                },
              })
            }
          >
            Clear
          </span>
        </div>
        <div className="filter-content">
          <div className="filter-price">
            <p className="filter-type">Price</p>
            <div className="price-range-num">
              <span>1000</span>
              <span>3000</span>
              <span>5000</span>
            </div>
            <div className="filter-range-input">
              <input
                type="range"
                list="tickmark"
                min="1000"
                max="5000"
                step="1000"
                value={productState.sortPrice}
                className="filter-price-input"
                onChange={(e) => {
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: e.target.value,
                  });
                  console.log(e.target.value);
                }}
              />
            </div>
            <div>
              <p className="filter-type">Category</p>
              <div className="filter-radio">
                {productCategories.map((category, i) => {
                  return (
                    <div className="filter-category" key={i}>
                      <input
                        type="checkbox"
                        name="category-filter"
                        checked={productState.selectedCategory.includes(
                          category
                        )}
                        value={category}
                        onChange={(e) =>
                          productDispatch({
                            type: "SORT_BY_CATEGORY",
                            payload: e.target.value,
                          })
                        }
                      />
                      <label onClick={() => console.log(productCategories)}>
                        {category} Clothing
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="filter-type">Size</p>
              <div className="filter-radio">
                {productSizes.map((size, i) => {
                  return (
                    <div className="filter-category">
                      <input
                        type="checkbox"
                        name="size-filter"
                        value={size}
                        onChange={(e) =>
                          productDispatch({
                            type: "SORT_BY_SIZE",
                            payload: e.target.value,
                          })
                        }
                      />
                      <label>
                        {i === 0 ? "Small" : i === 1 ? "Medium" : "Large"} (
                        {size})
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="filter-type">Rating</p>
              <div className="filter-rating">
                <span>
                  1 <StarOutlineRoundedIcon style={{ fontSize: "1rem" }} />
                </span>
                <span>
                  5 <StarRoundedIcon style={{ fontSize: "1rem" }} />
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                list="steplist"
                value={productState.ratingRange}
                onChange={(event) =>
                  productDispatch({
                    type: "SORT_BY_RATING_RANGE",
                    payload: event.target.value,
                  })
                }
              />
              <datalist id="steplist">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </datalist>
            </div>
          </div>
        </div>

        <div>
          <p className="filter-type">Sort By</p>
          <div className="filter-radio">
            <div className="filter-category">
              <input
                type="radio"
                name="sort"
                value="high-to-low"
                onChange={(e) =>
                  productDispatch({
                    type: "SORT_BY_PRICE_RANGE",
                    payload: e.target.value,
                  })
                }
              />
              <label>Price - High to Low</label>
            </div>
            <div className="filter-category">
              <input
                type="radio"
                name="sort"
                value="low-to-high"
                onChange={(e) =>
                  productDispatch({
                    type: "SORT_BY_PRICE_RANGE",
                    payload: e.target.value,
                  })
                }
              />
              <label>Price - Low to High</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
