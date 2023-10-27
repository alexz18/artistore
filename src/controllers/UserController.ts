import { UserRepository } from '../repositories/UserRepository'
import { Request, Response } from 'express'

export class UserController {
  public static async getUsers(req: Request, res: Response) {
    console.log('getUsers controller')
    try {
      const userRepository = new UserRepository()
      const users = await userRepository.getUsers()
      console.log(users)
      res.json(users)
    } catch (e) {
      // TODO: add error mapping to switch
      res.status(401).send(e)
    }
  }
}
