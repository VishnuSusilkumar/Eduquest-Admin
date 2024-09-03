import { IAdminService } from "../interfaces/iAdmin.interface";
import { IAdminRepository } from "../interfaces/iAdmin.repository";

export class AdminService implements IAdminService {
  constructor(private repository: IAdminRepository) {}

  addCategories(categories: any): Promise<Object> {
    return this.repository.addCategories(categories);
  }
  getCategories(): Promise<any> {
    return this.repository.getCategories();
  }

  addFAQ(questions: any): Promise<Object> {
    return this.repository.addFAQ(questions);
  }

  getFAQ(): Promise<any> {
    return this.repository.getFAQ();
  }
}
