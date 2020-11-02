import { ConfigService } from '@nestjs/config';

export const MongoConfig = () => ({
  url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@development.romr0.gcp.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
});

export const MongooseSetup = async (configService: ConfigService) => {
  return {
    uri: configService.get<string>('url'),
    useUnifiedTopology: true,
  };
};
