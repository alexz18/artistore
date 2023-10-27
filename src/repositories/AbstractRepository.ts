import { Repository } from 'typeorm'


export abstract class AbstractRepository {
  private repository: Repository<any>

  public constructor(repository: Repository<any>) {
    this.repository = repository
  }

  public getRepository(): Repository<any> {
    return this.repository
  }
}
