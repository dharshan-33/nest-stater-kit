import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'the name of the user' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: 'the password of the user' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: 'the age of the user', example:20 })
  @IsInt()
  @Min(1, { message: 'Age must be a positive number' })
  age: number;
  id: number;
}
export class UserResponseDto extends CreateUserDto {
  @ApiProperty({ description: 'Id', example: 25 })
  id: number;
}
