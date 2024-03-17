import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { configuration } from '../../../config/configuration';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

/* TODO - config guard for auth */
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../../../config/guard/roles/roles.guard';
import { AuthGuard } from '../../../config/guard/auth/auth.guard';


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
  ]
})
export class AuthModule {}

/*
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
        {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
*/