import { DynamicModule } from '@nestjs/common';
/* import { ConfigService } from '@nestjs/config'; */
import { MongooseModule } from '@nestjs/mongoose';
/* import { connect } from 'mongoose'; */

export const DatabaseProvider: DynamicModule = MongooseModule.forRoot(
  'mongodb://127.0.0.1:27017/f1-db',
);
