import { Ref } from "react";

export interface SectionProps {
  sectionRef: Ref<HTMLDivElement> | undefined;
  inView: boolean;
}
