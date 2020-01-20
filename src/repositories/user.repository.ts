import { DefaultCrudRepository, juggler, repository, BelongsToAccessor } from '@loopback/repository';
import { User, UserRelations, People } from '../models';
import { inject, Getter } from '@loopback/core';
import { PeopleRepository } from './people.repository';

export type Credentials = {
  email: string;
  password: string;
};

export type UsersData = {
  username: string;
  email: string;
  password: string;
  name: string;
  lastname: string;
};

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
  > {

  public readonly people: BelongsToAccessor<People, typeof User.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: juggler.DataSource, @repository.getter('PeopleRepository') protected peopleRepositoryGetter: Getter<PeopleRepository>,
  ) {
    super(User, dataSource);
    this.people = this.createBelongsToAccessorFor('people', peopleRepositoryGetter);
    this.registerInclusionResolver('people', this.people.inclusionResolver);
  }
}
