export type TagResponse = {
  id: string;
  name: string;
  color: TagColorType;
};

type TagColorType = {
  red: number;
  green: number;
  blue: number;
};
