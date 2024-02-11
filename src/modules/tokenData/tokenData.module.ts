import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockTracker } from './entities/blockTracker.entity';
import { TokenEvent } from './entities/tokenEvent.entity';
import { BlocktrackerService } from './services/blockTracker.service';
import { TokenEventService } from './services/tokenEvent.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlockTracker, TokenEvent])],
  controllers: [],
  providers: [BlocktrackerService, TokenEventService],
  exports: [BlocktrackerService, TokenEventService],
})
export class TokenDataModule {}
