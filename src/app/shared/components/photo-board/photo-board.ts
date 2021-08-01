export interface Photo {
  id: number;
  url: string;
  description: string;
}

export type PhotoBoard = Array<Photo>;
