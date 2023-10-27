import { User } from '../entities/User'
import { AbstractRepository } from './AbstractRepository'
import { Ntest1DataSource } from '../Ntest1DataSource'

export class UserRepository extends AbstractRepository {
  public constructor() {
    super(Ntest1DataSource.getRepository(User))
  }

  public async getUsers(): Promise<User[]> {
    return await this.getRepository().createQueryBuilder('user')
      .loadRelationCountAndMap('user.totalArticles', 'user.articles')
      .getMany()
  }
}
