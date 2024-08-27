import { PetFilter } from "@/app/models/models";

export default class SurveyService {
  private static instance: SurveyService;

  private constructor() {}

  static getInstance(): SurveyService {
    if (!SurveyService.instance) {
      SurveyService.instance = new SurveyService();
    }
    return SurveyService.instance;
  }

  async sendSurvey(filters: PetFilter[]) {
    // send requests to server
  }
}
