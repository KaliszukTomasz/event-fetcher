import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksService } from '../tasks/tasks.service';
import configuration from '../../config/configuration';
import { DataSource } from 'typeorm';
import { TokenDataModule } from '../tokenData/tokenData.module';
import { join } from 'path';

@Module({
  imports: [
    TokenDataModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ load: [configuration] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: +configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}')], // TODO: fix pathing
        migrationsTableName: 'migrations',
        synchronize: false,
        autoLoadEntities: true,
      }),
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
  ],
  controllers: [],
  providers: [TasksService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
