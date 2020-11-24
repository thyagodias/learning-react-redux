import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../services/api";
import { addProductToCart } from "../store/modules/cart/actions";

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("/products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  const handleAddProductToCard = useCallback(
    (product) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return (
    <>
      <h1>Catalog</h1>

      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span> {"  "}
          <button onClick={() => handleAddProductToCard(product)} type="button">
            Comprar
          </button>
        </article>
      ))}
    </>
  );
};

export default Catalog;
