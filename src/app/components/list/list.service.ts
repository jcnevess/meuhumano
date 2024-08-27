export default class ListService {
  private static instance: ListService;

  constructor() {}

  static getInstance(): ListService {
    if (!ListService.instance) {
      ListService.instance = new ListService();
    }

    return ListService.instance;
  }
}
