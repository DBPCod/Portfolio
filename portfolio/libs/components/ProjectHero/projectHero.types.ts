export interface ProjectHeroProps {
  project: {
    title: string;
    subtitle: string;
    meta?: {
      role?: string;
      timeline?: string;
      client?: string;
    };
    links?: {
      live?: string;
      source?: string;
    };
  };
}
