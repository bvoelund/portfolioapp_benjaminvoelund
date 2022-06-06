import { Ref } from "react";

export interface SectionInterface {
  sectionRef: Ref<HTMLDivElement> | undefined;
  inView: boolean;
}
