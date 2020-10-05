import { Module } from '@nestjs/common';

/* Main App Module */
import { AppController } from './app.controller';
import { AppService } from './app.service';

/* Dotenv config */
import { ConfigModule, ConfigService } from '@nestjs/config';
import MongoConfig from './config/mongo.connector';
import {TypeOrmModule} from '@nestjs/typeorm';

/* Todo Feature Module */
import { TodoModule } from './entities/todo/todo.module';
import { config } from 'process';
@Module({
  imports: [
    TodoModule,
    ConfigModule.forRoot({ isGlobal: true, load: [MongoConfig]}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mongodb',
          url: configService.get<string>('url'),
          useUnifiedTopology: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
