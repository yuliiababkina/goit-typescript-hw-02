export type Image = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular?: string;
  };
};
