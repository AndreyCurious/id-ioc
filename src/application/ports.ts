import { Post } from "../domain/Post";
import { User } from "../domain/User";

export interface UsersStorageService {
  users?: User[];
  updateUsers(users: User[]): void;
}

export interface PostsStorageService {
  posts?: Post[];
  updatePosts(posts: Post[]): void;
}

export interface CurrentUserIdStorageService {
  currentUserId?: number;
  updateCurrentUserId(id: number): void;
}

export interface ApiUsersService {
  getUsersAsync(url: string): Promise<User[]>;
}


export interface ApiPostsService {
  getPostsAsync(url: string): Promise<Post[]>;
}