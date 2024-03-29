import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { configuration } from '../../../config/configuration';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useFactory: async () => ({
        global: true,
        secret: configuration().jwt.jwtSecret,
        signOptions: {
          expiresIn: '4 days'
        }
      })
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy
  ]
})
export class AuthModule {}