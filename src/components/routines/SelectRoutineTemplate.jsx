import React, { useEffect, useState } from "react";
import { Loader, Button } from "../common";
import ProductForm from "../products/ProductForm";
import { useTemplates } from "../../hooks";

const SelectRoutineTemplate = () => {
  const {
    templates,
    loadTemplates,
    cloneTemplateAsSection,
    isLoading,
  } = useTemplates();
  const [currentTemplate, setCurrentTemplate] = useState();

  const useTemplate = () => {
    cloneTemplateAsSection(currentTemplate);
  }

  useEffect(() => {
    loadTemplates("Rutinas");
  }, []);

  return (
    <div>
      {isLoading && <Loader />}

      <div>
        <h3>Templates:</h3>
        {templates.map((template) => (
          <Button
            onClick={() => setCurrentTemplate(template)}
            disabled={template === currentTemplate}
            className="text-sm font-normal px-1.5 py-1 m-1 bg-sky-600 hover:bg-sky-800"
          >
            {template.id.substr(0, 23)}
          </Button>
        ))}
        <div>
          <Button onClick={useTemplate}>Usar template</Button>
        </div>

        {currentTemplate?.templateNotes && (
          <div className="text-sm text-gray-300 italic">
            {currentTemplate.templateNotes}
          </div>
        )}

        {currentTemplate?.steps?.map((step, i) => (
          <div className="mt-8">
            <div className="flex space-x-6">
              <div className="font-bold text-xl">{step.name}</div>
              <div className="text-md mt-0 text-gray-400">{step.levels}</div>
              <div className="text-md mt-0 text-gray-400">{step.routines}</div>
            </div>
            <div>
              {step.products?.map((product, j) => (
                <ProductForm stepIndex={i} productIndex={j} id={product} doNotRemove />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectRoutineTemplate;
