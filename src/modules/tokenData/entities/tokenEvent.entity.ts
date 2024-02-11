import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'token_event' })
export class TokenEvent extends BaseEntity {
  @Column({ type: 'varchar', length: 42 })
  from: string;

  @Column({ type: 'varchar' })
  txHash: string;

  @Column({ type: 'int' })
  block: number;

  @Column({ type: 'varchar', unique: true })
  eventId: string;

  @Column({ type: 'varchar' })
  actionType: string;
}
