import { ArticleRepository } from '../repositories/ArticleRepository'
import { Article } from '../entities/Article'
import { Request, Response } from 'express'

export class ArticleController {
  public static async getArticles(req: Request, res: Response) {
    console.log('getArticles controller')
    try {
      const articleRepository = new ArticleRepository()
      const articles = await articleRepository.getArticles()
      console.log(articles)
      res.json(articles)
    } catch (e) {
      // TODO: add error mapping to switch
      res.status(401).send(e)
    }
  }

  public static async saveArticle(req: Request, res: Response) {
    console.log('saveArticle controller')
    try {
      const article = new Article()
      // TODO: add validation for params
      console.log(req.params.id)
      if (req.params.id) {
        article.id = req.params.id
      }
      console.log(req)
      article.title = req.body.title
      article.content = req.body.content
      article.imageUrl = req.body.imageUrl
      console.log('-----\n', article)
      const articleRepository = new ArticleRepository()
      await articleRepository.save(article)
      res.status(200).send('OK')
    } catch (e) {
      // TODO: add error mapping to switch
      res.status(401).send(e)
    }
  }

  public static async getArticle(req: Request, res: Response) {
    console.log('getArticle controller')
    try {
      const articleId = req.params.id
      const articleRepository = new ArticleRepository()
      const article = await articleRepository.findById(articleId)
      console.log(article)
      res.json(article)
    } catch (e) {
      // TODO: add error mapping to switch
      res.status(401).send(e)
    }
  }

  public static async removeArticle(req: Request, res: Response) {
    console.log('removeArticle controller')
    try {
      const articleId = req.params.id
      const articleRepository = new ArticleRepository()
      const article = await articleRepository.findById(articleId)
      await articleRepository.remove(article)
      res.status(200).send('OK')
    } catch (e) {
      // TODO: add error mapping to switch
      res.status(401).send(e)
    }
  }
}
