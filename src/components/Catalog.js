import React, { useEffect, useState } from "react";
import api from "../services/api";
import CatalogItem from "./CatalogItem";

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <>
      <h1>Catalog</h1>

      {catalog.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </>
  );
};

export default Catalog;
