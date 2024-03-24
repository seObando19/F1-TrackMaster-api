export interface User {
  name:string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  roles: Roles[];
  /* token: string; */
  config: ConfigUser;
  /* avatar: File; */
  numberPhone: numberPhone;
  lastAccess: Date;
  createdAt: Date;
  updatedAt: Date;
}

export enum Roles {
  superAdmin = "superAdmin",
  admin = "Administrator",
  userRegister = "user-register",
  userExpert = "user-expert",
}

export enum Languages {
  Es = "Spanish",
  En = "English"
}

export interface ConfigUser {
  notificationsMail?: boolean;
  notificationPhone?: boolean;
  useLang: Languages;
}

export interface numberPhone {
  code: string;
  number: string;
  fullNumber: string;
}
