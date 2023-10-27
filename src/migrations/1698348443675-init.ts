import { MigrationInterface, QueryRunner } from "typeorm";

export class init1698348443675 implements MigrationInterface {
    name = 'init1698348443675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "articles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "content" text NOT NULL, "imageUrl" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "contacts" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "articles" ADD CONSTRAINT "FK_a9d18538b896fe2a6762e143bea" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" DROP CONSTRAINT "FK_a9d18538b896fe2a6762e143bea"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "articles"`);
    }

}
