import { SetMetadata } from "@nestjs/common";
import { Roles } from "../../src/modules/user/interfaces/user.interface";

export const ROLES_KEY = 'roles';
export const RolesAccess = (...roles: Roles[]) => SetMetadata(ROLES_KEY, roles);
