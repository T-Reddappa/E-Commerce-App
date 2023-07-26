import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

import { ProductContext } from "../../context/productContext";
import Categories from "../../components/categories/Categories";
import Loading from "../../components/loading/Loading";

const Home = () => {
  const { productState, productDispatch, isLoading, setIsLoading } =
    useContext(ProductContext);
  document.title = "Home | Vestidos";
  const navigate = useNavigate();

  return (
    <div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <Categories />
          <div className="home-banner">
            <div className="home-banner-img-container">
              <img
                onClick={() => {
                  productDispatch({
                    type: "SORT_BY_CATEGORY",
                    payload: "All",
                  });
                  window.scroll({ top: 0, behavior: "smooth" });

                  navigate("/products");
                }}
                src="https://assets.ajio.com/cms/AJIO/WEB/01072023-UHP-D-HiddenGems-Header.jpg"
                alt="banner"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
