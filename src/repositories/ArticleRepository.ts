import { Article } from '../entities/Article'
import { AbstractRepository } from './AbstractRepository'
import { Ntest1DataSource } from '../Ntest1DataSource'

export class ArticleRepository extends AbstractRepository {
  public constructor() {
    super(Ntest1DataSource.getRepository(Article))
  }

  public async getArticles(): Promise<Article[]> {
    return await this.getRepository().createQueryBuilder('article')
      .leftJoinAndSelect('article.user', 'user')
      .select([
        'article.id',
        'article.title',
        'article.content',
        'article.imageUrl',
        'article.createdAt',
        'article.updatedAt',
        'user.contacts'
      ])
      .getMany()
  }

  public async findById(id: string): Promise<Article> {
    return await this.getRepository().findOneOrFail({ where: { id: id } })
  }

  public async save(article: Article): Promise<void> {
    await this.getRepository().save(article)
  }

  public async remove(article: Article): Promise<void> {
    await this.getRepository().remove(article)
  }
}
