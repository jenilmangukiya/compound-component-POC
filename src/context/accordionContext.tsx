import { createContext, useContext } from "react";

export interface AccordionContextProps {
  activeSection?: string | null;
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AccordionContext = createContext<AccordionContextProps>({
  activeSection: "",
  setActiveSection: () => {},
});

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("Can not use accordion Context Outside provider");
  }

  return context;
};
