import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useProducts, useSections } from "../../hooks";
import ProductCombobox from "./ProductCombobox";

const StepProducts = ({ stepIndex, productIndex, id, onChange, doNotRemove }) => {
  const { getProductById } = useProducts();
  const product = getProductById(id);
  const { updateRoutineStepProduct } = useSections();

  const remove = () => {
    updateRoutineStepProduct(stepIndex, productIndex, false);
    onChange && onChange();
  };

  return (
    <div>
      {product && (
        <div className="flex h-16 border mt-3">
          <img src={product.cover} className="h-16 w-16" alt={product.name} />
          <div className="py-0.5 px-3 w-full overflow-hidden">
            <div className="truncate">{product.name}</div>
            <div className="flex justify-between text-sm text-violet-500">
              <div>{product.company}</div>
              <div>{product.price}</div>
            </div>
          </div>
          <div className="w-8 pl-2 pt-0.5">
            {!doNotRemove && (
              <button onClick={remove} type="button">
                <TrashIcon className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {!product && (
        <div className="mt-3">
          <ProductCombobox
            stepIndex={stepIndex}
            productIndex={productIndex}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
};

export default StepProducts;
