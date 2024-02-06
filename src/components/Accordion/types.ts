import { FC } from "react";

export type AccordionSectionProps = {
  sectionKey: string;
  children: React.ReactNode;
};

export type AccordionProps = {
  children: React.ReactNode;
  defaultActive?: string;
};
export type AccordionHeaderProps = {
  children: React.ReactNode;
};

export type AccordionStaticProps = {
  Section: FC<AccordionSectionProps>;
  Header: FC<AccordionHeaderProps>;
};
