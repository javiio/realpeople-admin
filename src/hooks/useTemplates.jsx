import React, {
  useState,
  createContext,
  useContext,
} from "react";
import { useFirebase } from "./useFirebase";
import { useUsers } from "./useUsers";

export const templateContext = createContext();

export const ProvideTemplates = ({ children }) => {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { loadCollection, save } = useFirebase();
  const { selectedUser } = useUsers();

  const loadTemplates = async (id) => {
    setIsLoading(true);
    const t = await loadCollection("templates", "sections", id);
    setTemplates(t);
    setIsLoading(false);
  };

  const cloneTemplateAsSection = async (template) => {
    setIsLoading(true);
    await save(template, "users", selectedUser.id, "sections", template.templateId);
    setIsLoading(false);
  };

  const value = {
    isLoading,
    templates,
    loadTemplates,
    cloneTemplateAsSection,
  };

  return <templateContext.Provider value={value}>{children}</templateContext.Provider>;
};

export const useTemplates = () => useContext(templateContext);
