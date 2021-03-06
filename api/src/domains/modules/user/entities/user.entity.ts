import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class User {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @PrimaryGeneratedColumn()
  public id: number

  @ApiProperty({
    example: 'myroslavshymon@gmail.com',
    description: 'email',
  })
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  public email: string

  @ApiProperty({ example: 'Miroslav Shymon', description: 'Name' })
  @Column({ type: 'varchar', length: 100, nullable: false })
  public name: string

  @ApiProperty({ example: 'qwerty12345', description: 'Пароль' })
  @Column({ type: 'varchar', length: 100, nullable: false })
  public password: string

  // @ManyToMany(() => Role, (role: Role) => role.users, { onDelete: 'CASCADE' })
  // public roles: Role[];
}
