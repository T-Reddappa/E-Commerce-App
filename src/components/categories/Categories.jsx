import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/productContext";
import { Link, useNavigate } from "react-router-dom";
import "./categories.css";
import { CategoryRounded } from "@mui/icons-material";
import { all } from "axios";

const Categories = () => {
  const {
    productState: { allCategories },
    productState,
    productDispatch,
    getCategories,
  } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
    console.log(allCategories);
    productDispatch({
      type: "CLEAR_FILTERS",
      payload: {
        categories: productState.allCategories,
        products: productState.products,
      },
    });
  }, []);

  return (
    <div className="categories-container">
      {allCategories?.map((category) => {
        return (
          <div className="card-wrapper" key={category.id}>
            <div
              className="category-card"
              onClick={() => {
                productDispatch({
                  type: "SORT_BY_CATEGORY",
                  payload: category.categoryName,
                });
                window.scroll({ top: 0, behavior: "smooth" });
                navigate("/products");
              }}
            >
              <img
                className="category-img"
                src={category.imgurl}
                alt={category.categoryName}
              />
            </div>
            <p className="cat-name">{category.categoryName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
