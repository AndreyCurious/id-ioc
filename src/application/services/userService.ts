import { injectable } from "inversify";
import { User } from "../../domain/User";
import axios from "axios";
import "reflect-metadata";


@injectable()
export class UserService {
  public async getUsers(): Promise<User[]> {
			try {
				const response = await axios(`https://jsonplaceholder.typicode.com/users`);
					return response.data;
			} catch (error) {
				console.error(error);
				return [];
			}
		}
}