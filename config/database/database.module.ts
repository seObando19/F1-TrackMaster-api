import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { configuration } from 'config/configuration';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: configuration().mongodb.uri,
        dbName: configuration().mongodb.database
      }),
    }),
  ],
})
export class DatabaseModule {}
