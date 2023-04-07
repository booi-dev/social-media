export type HashTagDataType = {
  createAt: Date;
  tagId: string;
  tagName: string;
  tagCount: number;
  tagCategory: string[];
};

export type HashTagType = {
  tagId: string;
  tagName: string;
};
