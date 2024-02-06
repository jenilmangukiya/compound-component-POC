import React, { useState } from "react";
import {
  AccordionContext,
  AccordionContextProps,
  useAccordionContext,
} from "../../context/accordionContext";
import {
  AccordionHeaderProps,
  AccordionProps,
  AccordionSectionProps,
  AccordionStaticProps,
} from "./types";

const Accordion: React.FC<AccordionProps> & AccordionStaticProps = ({
  children,
  defaultActive = "",
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(
    defaultActive
  );

  const contextValue: AccordionContextProps = {
    activeSection,
    setActiveSection,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className="accordion-container">{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionSection: React.FC<AccordionSectionProps> = ({
  sectionKey,
  children,
}) => {
  const { activeSection, setActiveSection } = useAccordionContext();

  const toggleSection = () => {
    setActiveSection((prevActiveSection) =>
      prevActiveSection === sectionKey ? null : sectionKey
    );
  };

  return (
    <div>
      <button onClick={toggleSection}>{sectionKey}</button>
      <div
        style={{
          display: activeSection === sectionKey ? "block" : "none",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children }) => {
  return <h3>{children}</h3>;
};

Accordion.Header = AccordionHeader;
Accordion.Section = AccordionSection;

export default Accordion;
