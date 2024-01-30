import { DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from "dotenv";

dotenv.config();
const ENVIROMENT_DATA = process.env;

export const DatabaseProvider: DynamicModule = MongooseModule.forRoot(
  `${ENVIROMENT_DATA.DB_HOST}://127.0.0.1:27017/${ENVIROMENT_DATA.DB_NAME}`,
);
