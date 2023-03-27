export type HashTagDataType = {
  tag: string;
  count: number;
  category: string[];
  [key: string]: string | number | string[];
};

export type HashTagType = {
  tagId: string;
  tagName: string;
};
