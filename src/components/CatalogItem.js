import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { addProductToCart } from "../store/modules/cart/actions";

const CatalogItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCard = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}
      <button onClick={handleAddProductToCard} type="button">
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;
