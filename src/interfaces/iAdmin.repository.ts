export interface IAdminRepository {
  addCategories(categories: any): Promise<Object>;
  getCategories(): Promise<any>;
  addFAQ(questions: any): Promise<Object>;
  getFAQ(): Promise<any>;
}
