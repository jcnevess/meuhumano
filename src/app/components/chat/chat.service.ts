import { Pet } from "@/app/models/models";

export class ChatService {
  private static instance: ChatService;

  private constructor() {}

  static getInstance() {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService();
    }

    return ChatService.instance;
  }

  async getPet(id: string): Promise<Pet> {
    return {
      id: "1",
      name: "Flanela",
      shelter: "Abrigo Patinhas",
      distance: 10,
      description:
        "Ex sunt labore pariatur enim pariatur. Veniam aliquip non proident \
              laboris sit in ut cupidatat deserunt excepteur ad laborum ipsum \
              consectetur.",
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
