import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { configuration } from "config/configuration";
import { Strategy, ExtractJwt } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configuration().jwt.jwtSecret
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, name: payload.name, roles: payload.roles };
  }
}