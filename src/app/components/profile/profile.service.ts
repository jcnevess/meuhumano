import { Pet } from "@/app/models/models";

export class ProfileService {
  private static instance: ProfileService;

  private constructor() {}

  static getInstance() {
    if (!ProfileService.instance) {
      ProfileService.instance = new ProfileService();
    }

    return ProfileService.instance;
  }

  async getPet(id: string): Promise<Pet> {
    return {
      id: id,
      name: "Flanela",
      shelter: "Abrigo Patinhas",
      distance: 10,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \
          minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, \
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \
          exercitation.",
      gender: "fêmea",
      breed: "SRD",
      size: "médio",
      age: 5,
      fur: "médio",
      castrated: true,
      mood: "agitado",
      coverIndex: 1,
      mediaList: [
        {
          mimetype: "video/mp4",
          uri: "./files/video/dogineo.mp4",
          alt: "Flanela",
        },
        {
          mimetype: "image/jpeg",
          uri: "./files/img/pexels-dog.jpg",
          alt: "Flanela",
        },
        {
          mimetype: "image/jpeg",
          uri: "./files/img/pexels-dog2.jpg",
          alt: "Flanela",
        },
      ],
    };
  }
}
