import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Article } from './Article'

// TODO: add the unique constraints
@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  public id: string

  @Column({ name: "title", type: "varchar", nullable: false })
  public title: string

  @Column({ name: "contacts", type: "varchar", nullable: false })
  public contacts: string

  @OneToMany(() => Article, (article) => article.user)
  articles: Article[]
}
