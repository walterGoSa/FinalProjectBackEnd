import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { User, UserRelations } from '../models';
import { inject } from '@loopback/core';


export type Credentials = {
  email: string;
  password: string;
};

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
  > {
  constructor(
    @inject('datasources.db') dataSource: juggler.DataSource,
  ) {
    super(User, dataSource);
  }
}
