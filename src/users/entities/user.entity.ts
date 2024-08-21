import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'the unique identifier of the user' })
  id: number;

  @Column()
  @ApiProperty({ description: 'the name of the user' })
  username: string;

  @Column()
  password: string;

  @Column()
  @ApiProperty({ description: 'the age of the user' })
  age: number;
}
