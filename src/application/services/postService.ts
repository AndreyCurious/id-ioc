import { injectable } from "inversify";
import { Post } from "../../domain/Post";
import axios from "axios";
import "reflect-metadata";



@injectable()
export class PostService {
  public async getPosts(userId: string): Promise<Post[]> {
		try {
			const response = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
				return response.data;
		} catch (error) {
			console.error(error);
			return [];
		}
  }
}