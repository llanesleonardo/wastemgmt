import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id = undefined

  @Column('varchar')
  name = ''
  @Column('varchar')
  lastname = ''
  @Column('varchar')
  email = ''
  @Column('varchar')
  username = ''
  @Column('int')
  position = 0
  @Column('date')
  creationDate = ''
  @Column({ type: 'date', nullable: true })
  modificationDate = ''
  @Column('int')
  active = 0
  @Column('int')
  roles = 0
  @Column('varchar')
  jwt = 0
  @Column('int')
  confirmUser = 0
  @Column({ type: 'date', nullable: true })
  activationDate = null
}
