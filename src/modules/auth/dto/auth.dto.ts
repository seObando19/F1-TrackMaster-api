import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class SignInDTO {
  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  password: string;
}