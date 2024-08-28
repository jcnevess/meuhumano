export interface Pet {
  id: string;
  name: string;
  shelter: string;
  distance: number;
  description: string;
  gender: string;
  breed: string;
  size: string;
  age: number;
  fur: string;
  castrated: boolean;
  mood: string;
  coverIndex: number; // Zero-based index of cover image on mediaList
  mediaList: { mimetype: string; uri: string; alt: string }[];
}

export interface PetFilter {
  key: string;
  value: string;
}

export interface MessageEmitter {
  id: string;
  name: string;
  imgUri: string;
}

export enum MessageDirection {
  SENT,
  RECEIVED,
}
