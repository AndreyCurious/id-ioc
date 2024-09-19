
import { Container } from 'inversify';
import "reflect-metadata";
import { UserService } from './application/services/userService';
import { PostService } from './application/services/postService';
import { UserApi } from './Infrastructure/api/UserApi';
import { PostApi } from './Infrastructure/api/PostApi';

const container = new Container();

container.bind(UserService).toSelf();
container.bind(PostService).toSelf();
container.bind(UserApi).toSelf();
container.bind(PostApi).toSelf();

export default container;