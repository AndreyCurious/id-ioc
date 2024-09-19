import { inject, injectable } from 'inversify';
import { PostService } from '../../application/services/postService';
import { Post } from '../../domain/Post';
import "reflect-metadata";

@injectable()

export class PostApi {
  private postService: PostService;
  constructor(/* @inject(PostService)  */ postService: PostService = new PostService()) {
    this.postService = postService;
  }
  public async getPosts(userId: string): Promise<Post[]> {
    return this.postService.getPosts(userId);
  }
}