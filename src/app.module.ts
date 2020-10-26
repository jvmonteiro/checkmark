import { Module } from '@nestjs/common';

/* Main App Module */
import { AppController } from './app.controller';
import { AppService } from './app.service';

/* Dotenv config */
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoConfig, MongooseSetup } from './config/mongo.connector';
import { MongooseModule } from '@nestjs/mongoose';

/* Todo Feature Module */
import { TodoModule } from './entities/todo/todo.module';
@Module({
  imports: [
    TodoModule,
    ConfigModule.forRoot({ isGlobal: true, load: [MongoConfig] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: MongooseSetup,
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
