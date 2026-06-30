export interface ProjectOverviewCardsProps {
  project: {
    overview?: {
      challenge?: {
        title: string;
        points: string[];
      };
      solution?: {
        title: string;
        points: string[];
      };
      result?: {
        title: string;
        metrics: Array<{
          value: string;
          label: string;
        }>;
      };
    };
  };
}
