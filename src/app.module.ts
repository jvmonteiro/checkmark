import { Module } from '@nestjs/common';

/* Main App Module */
import { AppController } from './app.controller';
import { AppService } from './app.service';

/* Dotenv config */
import { ConfigModule, ConfigService } from '@nestjs/config';
import MongoConfig from './config/mongo.connector';
import { TypeOrmModule } from '@nestjs/typeorm';

/* Todo Feature Module */
import { TodoModule } from './entities/todo/todo.module';
@Module({
  imports: [TodoModule, ConfigModule.forRoot({ isGlobal: true, load: [MongoConfig] }), TypeOrmModule.forRoot({
    type: 'mongodb',
    url: this.configService.get<string>('url')
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configService: ConfigService) {}
}
