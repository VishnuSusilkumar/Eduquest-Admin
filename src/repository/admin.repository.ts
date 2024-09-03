import { IAdminRepository } from "../interfaces/iAdmin.repository";
import CategoriesModel from "../model/schemas/categories.schema";
import FAQModel from "../model/schemas/faq.schema";

export class AdminRepository implements IAdminRepository {
  async addCategories(categories: any): Promise<Object> {
    try {
      await CategoriesModel.deleteMany();
      await CategoriesModel.create(categories);
      return { success: true };
    } catch (e: any) {
      console.log("DB Error");
      throw new Error(e.message);
    }
  }

  async getCategories(): Promise<any> {
    try {
      const categories = await CategoriesModel.find();
      return categories;
    } catch (e: any) {
      console.log("DB Error");
      throw new Error(e.message);
    }
  }

  async addFAQ(questions: any): Promise<Object> {
    try {
      await FAQModel.deleteMany();
      await FAQModel.create(questions);
      return { success: true };
    } catch (e: any) {
      console.log("DB Error");
      throw new Error(e.message);
    }
  }

  async getFAQ(): Promise<any> {
    try {
      const faq = await FAQModel.find();
      return faq;
    } catch (e: any) {
      console.log("DB Error");
      throw new Error(e.message);
    }
  }
}
