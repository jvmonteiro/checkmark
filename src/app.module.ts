import { Module } from '@nestjs/common';

/* Main App Module */
import { AppController } from './app.controller';
import { AppService } from './app.service';

/* Todo Feature Module */
import { TodoModule } from './entities/todo/todo.module';
@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
