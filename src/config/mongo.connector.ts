import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo/todo.entity';

export const MongoConfig = () => ({
  url: `mongodb+srv://antqueen:${process.env.MONGO_PASSWORD}@development.romr0.gcp.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
});

export const TypeOrmSetup = async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
  return {
    type: 'mongodb',
    url: configService.get<string>('url'),
    useUnifiedTopology: true,
    entities: [Todo]
  };
};
