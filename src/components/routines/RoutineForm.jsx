import React, { useState, useEffect } from "react";
import { Loader, Button, Switch } from "../common";
import ProductForm from "../products/ProductForm";
import { useProducts, useSections, useUsers } from "../../hooks";
import SelectRoutineTemplate from './SelectRoutineTemplate';

const RoutineForm = ({ routine }) => {
  const [notes, setNotes] = useState("");
  const [hasChanges, setHasChanges] = useState(false);
  const { isLoading } = useProducts();
  const { saveRoutine } = useSections();
  const selectedUser = useUsers();
  const handleNotesChange = (e) => {
    setNotes(e.target.value);
    setHasChanges(true);
  };
  const handleSave = () => {
    saveRoutine(notes);
    setHasChanges(false);
  };

  useEffect(() => {
    if (routine) {
      if (routine.notes) {
        setNotes(routine.notes);
      } else {
        setNotes("");
      }
    }
  }, [routine]);

  useEffect(() => {
    setHasChanges(false);
  }, [selectedUser]);

  return (
    <div className="relative">
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <div className="sticky top-2 pt-4 bg-slate-800">
            <div className="flex justify-between items-center px-4 pb-2 w-full border-b border-gray-50">
              <div>
                <Switch label="Activo" enabled={false} onChange={() => {}} />
              </div>
              <Button
                onClick={handleSave}
                disabled={!hasChanges}
              >
                Guardar
              </Button>
            </div>
          </div>
          <textarea
            value={notes}
            onChange={handleNotesChange}
            className="text-black p-2 h-32 rounded w-full mt-8"
          />
        </>
      )}

      {!isLoading && routine.steps && (
        <div>
          {routine.templateNotes && (
            <div className="text-sm text-gray-300 italic">
              {routine.templateNotes}
            </div>
          )}
          {routine.steps && routine.steps.map((step, i) => (
            <div className="mt-8">
              <div className="flex space-x-6">
                <div className="font-bold text-xl">{step.name}</div>
                <div className="text-md mt-0 text-gray-400">{step.levels}</div>
                <div className="text-md mt-0 text-gray-400">{step.routines}</div>
              </div>
              <div>
                <ProductForm
                  stepIndex={i}
                  productIndex={0}
                  id={step.products[0]}
                  onChange={() => setHasChanges(true)}
                />
                <ProductForm
                  stepIndex={i}
                  productIndex={1}
                  id={step.products[1]}
                  onChange={() => setHasChanges(true)}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {!isLoading && !routine.steps && (
        <SelectRoutineTemplate />
      )}
    </div>
  );
};

export default RoutineForm;
