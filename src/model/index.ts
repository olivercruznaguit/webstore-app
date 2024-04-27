// collectionTypes.ts

export interface iItem {
  itemId: string;
  img: string;
  price: number;
  itemName: string;
};

export interface iCollection {
  collectionName: string;
  collectionId: string;
  items: iItem[];
};