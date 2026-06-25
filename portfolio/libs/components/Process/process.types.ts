import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: IconDefinition;
};

export type ProcessProps = {
  steps: ProcessStep[];
};
