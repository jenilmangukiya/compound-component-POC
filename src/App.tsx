import { Accordion } from "./components";

const App = () => {
  return (
    <div className="container">
      <Accordion defaultActive="Section 1">
        <Accordion.Header>Compound component POC</Accordion.Header>
        <Accordion.Section sectionKey="Section 1">
          Content for Section 1
        </Accordion.Section>
        <Accordion.Section sectionKey="Section 2">
          Content for Section 2
        </Accordion.Section>
        <Accordion.Section sectionKey="Section 3">
          Content for Section 3
        </Accordion.Section>
      </Accordion>
    </div>
  );
};

export default App;
