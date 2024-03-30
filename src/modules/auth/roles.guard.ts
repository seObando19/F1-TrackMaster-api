import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Roles } from "../user/interfaces/user.interface";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector){}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Roles[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if(!requiredRoles) return true;
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.roles.includes(role));
  }
}