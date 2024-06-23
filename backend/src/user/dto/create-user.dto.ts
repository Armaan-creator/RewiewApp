import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {

  
  @IsString()
  username:string;
  
  
  @IsNotEmpty()
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  password: string;
}
