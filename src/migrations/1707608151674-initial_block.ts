import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialBlock1707608151674 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const blockNumber = 179145104;

    await queryRunner.query(
      `INSERT INTO block_tracker(block) VALUES (${blockNumber})`,
    );
  }

  public async down(): Promise<void> {}
}
