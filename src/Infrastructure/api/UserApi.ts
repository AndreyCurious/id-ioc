import { injectable, inject } from 'inversify';
import { UserService } from '../../application/services/userService';
import { User } from '../../domain/User';
import "reflect-metadata";


@injectable()
export class UserApi {
  private userService: UserService;
  constructor(/* @inject(UserService) */ userService: UserService = new UserService()) {
    this.userService = userService;
  }

  public async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
}


