import { DataSource } from 'typeorm'
import { User } from './entities/User'
import { Article } from './entities/Article'

export const Ntest1DataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "ntest1",
  password: "tC-8rF1J0h",
  database: "ntest1",
  entities: [User, Article],
  migrations: ["./src/migrations/*.ts"],
  synchronize: true,
  logging: true,
})

Ntest1DataSource.initialize()
  .then(() => console.log('database connection initialized'))
  .catch((error) => console.log(error))

