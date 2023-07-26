import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

const initialProductState = {
  products: [],
  productDetails: {},
  allCategories: [],
  selectedCategory: [],
  searchInput: "",
  ratingRange: "",
  sortPrice: "",
  sortPriceRange: "",
  selectedSizes: [],
  // address: [],
  orderList: [],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "DISPLAY_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    case "DISPLAY_CATEGORIES":
      return { ...state, allCategories: action.payload };
    case "SORT_BY_CATEGORY":
      return {
        ...state,
        selectedCategory:
          action.payload === "All"
            ? ["Men", "Women", "Kids"]
            : state.selectedCategory.includes(action.payload)
            ? state.selectedCategory.filter(
                (categoryType) => categoryType !== action.payload
              )
            : [...state.selectedCategory, action.payload],
      };
    case "FILTER_BY_SEARCH":
      console.log(action.payload);
      return { ...state, searchInput: action.payload };
    case "SORT_BY_PRICE":
      return { ...state, sortPrice: action.payload };
    case "SORT_BY_PRICE_RANGE":
      return { ...state, sortPriceRange: action.payload };
    case "SORT_BY_RATING_RANGE":
      return { ...state, ratingRange: action.payload };
    case "CLEAR_FILTERS":
      return {
        ...initialProductState,
        products: action.payload.products,
        allCategories: action.payload.categories,
      };
    case "SORT_BY_SIZE":
      console.log(action.payload);
      console.log(state.selectedSizes);
      return {
        ...state,
        selectedSizes: state.selectedSizes.includes(action.payload)
          ? state.selectedSizes.filter((size) => size !== action.payload)
          : [...state.selectedSizes, action.payload],
      };
    case "SET_ORDER_LIST":
      return { ...state, orderList: [...state.orderList, action.payload] };

    // case "ADD_ADDRESS":
    //   return {
    //     ...state,
    //     address: [...state.address, action.payload],
    //   };
    default:
      return state;
  }
};

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/products");
      const products = res.data.products;
      setProducts(res.data.products);
      productDispatch({
        type: "DISPLAY_PRODUCTS",
        payload: products,
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  // ;

  const getProductById = async (productId) => {
    try {
      const response = await axios.get(`/api/products/${productId}`);
      const {
        status,
        data: { product },
      } = response;
      if (status === 200) {
        productDispatch({ type: "GET_PRODUCT_DETAILS", payload: product });
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log("done");
    }
  };

  const getCategories = async () => {
    try {
      const res = await axios.get("/api/categories");
      const {
        status,
        data: { categories },
      } = res;
      if (status === 200) {
        productDispatch({ type: "DISPLAY_CATEGORIES", payload: categories });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const filterBySearchInput = productState.searchInput
    ? productState.products.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(productState.searchInput.toLowerCase()) ||
          product.brand
            .toLowerCase()
            .includes(productState.searchInput.toLowerCase())
      )
    : productState.products;

  const filteredByCategory =
    productState.selectedCategory.length > 0
      ? filterBySearchInput.filter((product) =>
          productState.selectedCategory.some(
            (categorieType) => product.category === categorieType
          )
        )
      : filterBySearchInput;

  // const sortByPrice =
  //   productState.sortPrice?.length > 0
  //     ? productState.sortPrice === "1000"
  //       ? [...filteredByCategory].filter(
  //           (product) => product.price <= productState.sortPrice
  //         )
  //       : productState.sortPrice === "2000"
  //       ? [...filteredByCategory].filter(
  //           (product) => product.price <= productState.sortPrice
  //         )
  //       : productState.sortPrice === "3000"
  //       ? [...filteredByCategory].filter(
  //           (product) => product.price <= productState.sortPrice
  //         )
  //       : productState.sortPrice === "4000"
  //       ? [...filteredByCategory].filter(
  //           (product) => product.price <= productState.sortPrice
  //         )
  //       : productState.sortPrice === "5000"
  //       ? [...filteredByCategory].filter(
  //           (product) => product.price <= productState.sortPrice
  //         )
  //       : filteredByCategory
  //     : filteredByCategory;
  const sortByPrice =
    productState.sortPrice?.length > 0
      ? filteredByCategory.filter(
          (product) => product.price <= parseInt(productState.sortPrice)
        )
      : filteredByCategory;

  const sortByPriceRange =
    productState.sortPriceRange?.length > 0
      ? productState.sortPriceRange === "low-to-high"
        ? [...sortByPrice].sort(
            (product1, product2) => product1.price - product2.price
          )
        : [...sortByPrice].sort(
            (product1, product2) => product2.price - product1.price
          )
      : sortByPrice;

  const sortByRating =
    productState.ratingRange?.length > 0
      ? sortByPriceRange.filter(
          (product) => product.rating === productState.ratingRange
        )
      : sortByPriceRange;

  //   const filteredByCategory =
  // productState.selectedCategory.length > 0
  //   ? [...productState.products].filter((product) =>
  //       productState.selectedCategory.some(
  //         (categorieType) => product.category === categorieType
  //       )
  //     )
  //   : productState.products;

  const filterBySize =
    productState.selectedSizes.length > 0
      ? sortByRating.filter((product) =>
          productState.selectedSizes.some((size) => product.size.includes(size))
        )
      : sortByRating;

  useEffect(() => {
    fetchProducts();
    getCategories();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productState,
        productDispatch,
        getCategories,
        getProductById,
        sortByPriceRange,
        sortByRating,
        filterBySize,
        isLoading,
        filteredByCategory,
        filterBySearchInput,
        setIsLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
