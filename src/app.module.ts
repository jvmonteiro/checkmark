import { Module } from '@nestjs/common';

/* Main App Module */
import { AppController } from './app.controller';
import { AppService } from './app.service';

/* Dotenv config */
import { ConfigModule, ConfigService } from '@nestjs/config';
import {MongoConfig, TypeOrmSetup} from './config/mongo.connector';
import {TypeOrmModule} from '@nestjs/typeorm';

/* Todo Feature Module */
import { TodoModule } from './entities/todo/todo.module';
@Module({
  imports: [
    TodoModule,
    ConfigModule.forRoot({ isGlobal: true, load: [MongoConfig] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: TypeOrmSetup,
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
