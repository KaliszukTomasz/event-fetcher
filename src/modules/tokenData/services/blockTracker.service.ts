import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BlockTracker } from '../entities/blockTracker.entity';

@Injectable()
export class BlocktrackerService {
  constructor(private dataSource: DataSource) {}

  async getLastBlock(): Promise<BlockTracker> {
    const repositroy = this.dataSource.getRepository(BlockTracker);

    return repositroy
      .createQueryBuilder('blockTracker')
      .select()
      .orderBy('blockTracker.block', 'DESC')
      .getOne();
  }

  async updateBlock(id: string, newBlockNumber: number): Promise<void> {
    const repositroy = this.dataSource.getRepository(BlockTracker);

    await repositroy
      .createQueryBuilder('blockTracker')
      .update(BlockTracker)
      .set({ block: newBlockNumber })
      .where('id = :id', { id })
      .execute();
  }
}
