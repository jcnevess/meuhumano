import { Pet, PetFilter } from "@/app/models/models";

export default class ListService {
  private static instance: ListService;

  private constructor() {}

  static getInstance(): ListService {
    if (!ListService.instance) {
      ListService.instance = new ListService();
    }

    return ListService.instance;
  }

  async getAvailableFilters(): Promise<PetFilter[]> {
    return [
      { key: "animal", value: "gato" },
      { key: "animal", value: "cachorro" },
      { key: "gender", value: "fêmea" },
      { key: "gender", value: "macho" },
      { key: "breed", value: "SRD" },
      { key: "breed", value: "ragdoll" },
      { key: "breed", value: "siamês" },
      { key: "breed", value: "persa" },
      { key: "breed", value: "siberiano" },
      { key: "breed", value: "british_shorthair" },
      { key: "breed", value: "birmanês" },
      { key: "breed", value: "bulldog" },
      { key: "breed", value: "labrador" },
      { key: "breed", value: "golden_retriever" },
      { key: "breed", value: "poodle" },
      { key: "breed", value: "rottweiler" },
      { key: "breed", value: "beagle" },
      { key: "breed", value: "yorkshire" },
      { key: "breed", value: "border_collie" },
      { key: "breed", value: "dachshund" },
      { key: "breed", value: "pastor_alemão" },
      { key: "breed", value: "outra_raça" },
      { key: "size", value: "porte_pequeno" },
      { key: "size", value: "porte_médio" },
      { key: "size", value: "porte_grande" },
      { key: "fur_height", value: "pelo_baixo" },
      { key: "fur_height", value: "pelo_médio" },
      { key: "fur_height", value: "pelo_alto" },
      { key: "age_range", value: "menos_de_1_ano" },
      { key: "age_range", value: "entre_1_e_3_anos" },
      { key: "age_range", value: "entre_3_e_7_anos" },
      { key: "age_range", value: "mais_de_7_anos" },
      { key: "castrated", value: "castrado" },
      { key: "castrated", value: "não_castrado" },
      { key: "mood", value: "agitado" },
      { key: "mood", value: "calmo" },
    ];
  }

  async getFilteredProfiles(filters: PetFilter[]): Promise<Pet[]> {
    return [
      {
        id: "1",
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
      },
      {
        id: "2",
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
      },
      {
        id: "3",
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
      },
    ];
  }
}
