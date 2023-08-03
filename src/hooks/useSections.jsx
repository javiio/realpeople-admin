import React, {
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import { useFirebase } from "./useFirebase";
import { useUsers } from "./useUsers";

export const sectionsContext = createContext();

export const ProvideSections = ({ children }) => {
  const [sections, setSections] = useState([]);
  const [survey, setSurvey] = useState([]);
  const [routine, setRoutine] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { userCollectionLive, save } = useFirebase();
  const { selectedUser } = useUsers();

  const loadSections = () => {
    setIsLoading(true);

    const loadCallback = (arr) => {
      console.log('got data', arr)
      arr.sort((a, b) => a.position - b.position);
      arr.forEach((e) => {
        console.log('eee', e)
        if (e.id === "Anamnesis") {
          setSurvey(e);
        } else if (e.id === "Rutinas") {
          setRoutine(e);
        }
      });
      setSections(arr);
      setIsLoading(false);
    };
    userCollectionLive(selectedUser, loadCallback, "sections");
  };

  useEffect(() => {
    console.log('chaining...', selectedUser)
    if (selectedUser) {
      loadSections();
    }
  }, [selectedUser]);

  const saveSectionAsTemplate = async ({ section, name }) => {
    setIsLoading(true);
    section.templateName = name;
    await save(section, "templates", "sections", section.id, name);
    setIsLoading(false);
  };

  const updateRoutineStepProduct = (stepIndex, productIndex, producttId) => {
    const r = { ...routine };
    r.steps[stepIndex].products[productIndex] = producttId;
    setRoutine(r);
  };

  const saveRoutine = async (notes) => {
    setIsLoading(true);
    const r = { ...routine, notes, isEmpty: false };
    await save(r, "users", selectedUser.id, "sections", "Rutinas");
    setIsLoading(false);
  };

  const value = {
    sections,
    survey,
    routine,
    isLoading,
    saveSectionAsTemplate,
    updateRoutineStepProduct,
    saveRoutine,
  };

  return <sectionsContext.Provider value={value}>{children}</sectionsContext.Provider>;
};

export const useSections = () => useContext(sectionsContext);
