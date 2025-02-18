import { IAdminUserService } from "../interfaces/iAdmin.User.service";
import AdminRabbitMQClient from "../rabbitmq/client";

export class adminUserService implements IAdminUserService {
  async deleteUser(userId: string): Promise<Object> {
    try {
      const operation = "delete-user";

      const message: any = await AdminRabbitMQClient.produceuserMessage(
        userId,
        operation
      );
      return JSON.parse(message.content.toString());
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getUsers() {
    try {
      const operation = "get-users";

      const message: any = await AdminRabbitMQClient.produceuserMessage(
        null,
        operation
      );
      return JSON.parse(message.content.toString());
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getInstructors() {
    try {
      const operation = "get-instructors";

      const message: any = await AdminRabbitMQClient.produceuserMessage(
        null,
        operation
      );
      return JSON.parse(message.content.toString());
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}
