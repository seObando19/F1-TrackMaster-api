import { SetMetadata } from "@nestjs/common";
import { Roles } from "../../src/modules/user/interfaces/user.interface";

export const HasRoles = (...roles: Roles[]) => SetMetadata('roles', roles);
