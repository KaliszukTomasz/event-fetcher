import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1707600308157 implements MigrationInterface {
  name = 'CreateTables1707600308157';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "token_event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "from" character varying(42) NOT NULL, "txHash" character varying NOT NULL, "block" integer NOT NULL, "eventId" character varying NOT NULL, "actionType" character varying NOT NULL, CONSTRAINT "UQ_0ab9e781c6cad60daf9811e543f" UNIQUE ("eventId"), CONSTRAINT "PK_68c97a5f44c8d6a9280db65de17" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "block_tracker" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "block" integer NOT NULL, CONSTRAINT "PK_150dffca22f4805d6c3ff511b79" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "block_tracker"`);
    await queryRunner.query(`DROP TABLE "token_event"`);
  }
}
