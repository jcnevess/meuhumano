export interface Pet {
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
