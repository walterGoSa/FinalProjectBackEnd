import { DefaultCrudRepository, juggler, repository, BelongsToAccessor } from '@loopback/repository';
import { People, PeopleRelations, User } from '../models';
import { DbDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { UserRepository } from './user.repository';

export class PeopleRepository extends DefaultCrudRepository<
  People,
  typeof People.prototype.id,
  PeopleRelations
  > {

  public readonly user: BelongsToAccessor<User, typeof People.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: juggler.DataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(People, dataSource);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
