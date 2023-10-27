import * as express from 'express'
import { Request, Response } from 'express'
import { UserController } from './controllers/UserController'
import { ArticleController } from './controllers/ArticleController'

const router = express.Router()

router.get('/', (req, res) => {
  console.log('main page')
  res.json({name: 'test1'})
})

router.get('/users', (req: Request, res: Response) => {
  UserController.getUsers(req, res)
})

router.get('/articles', (req: Request, res: Response) => {
  ArticleController.getArticles(req, res)
})

router.get('/articles/:id', (req: Request, res: Response) => {
  ArticleController.getArticle(req, res)
})

router.post('/articles', (req: Request, res: Response) => {
  ArticleController.saveArticle(req, res)
})

router.put('/articles/:id', (req: Request, res: Response) => {
  ArticleController.saveArticle(req, res)
})

router.delete('/articles/:id', (req: Request, res: Response) => {
  ArticleController.removeArticle(req, res)
})

export default router
