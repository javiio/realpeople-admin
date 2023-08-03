import React, { useState } from "react";
import { Combobox } from "@headlessui/react";
import { useProducts, useSections } from "../../hooks";

const ProductCombobox = ({ stepIndex, productIndex, onChange }) => {
  const { products, isLoading } = useProducts();
  const { updateRoutineStepProduct } = useSections();
  const [query, setQuery] = useState("");

  const setProduct = (productId) => {
    updateRoutineStepProduct(stepIndex, productIndex, productId);
    onChange && onChange();
  };

  const filteredProducts = query === ""
    ? products
    : products.filter((product) => `${product.name} - ${product.company}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <Combobox value={undefined} onChange={setProduct}>
      <Combobox.Input
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Nombre producto..."
        className="py-2 px-4 rounded w-96 text-black"
      />
      <Combobox.Options className="bg-white text-black mt-1 px-4 rounded overflow-hidden">
        {filteredProducts.map((product) => (
          <Combobox.Option key={product.id} value={product.id}>
            <div className="h-12 border-b flex">
              <div className="w-12 shrink-0">
                <img src={product.cover} className="h-12 w-12" alt={product.name} />
              </div>
              <div className="flex-1 p-2 whitespace-nowrap">
                {`${product.name} ${product.company}`}
              </div>
            </div>
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default ProductCombobox;
