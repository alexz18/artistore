import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { User } from './User'

@Entity({ name: "articles" })
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  public id: string

  @Column({ name: "title", type: "varchar", nullable: false })
  public title: string

  @Column({ name: "content", type: "text", nullable: false })
  public content: string

  @Column({ name: "imageUrl", type: "varchar", nullable: true })
  public imageUrl: string

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public updatedAt: Date

  @ManyToOne(() => User, (user) => user.articles)
  user: User
}
