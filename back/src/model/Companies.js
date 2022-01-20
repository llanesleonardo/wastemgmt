import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from 'typeorm'

@Entity()
export class Companies {
  @PrimaryGeneratedColumn()
  id = undefined

  @Column('varchar')
  name = ''
  @Column('varchar')
  email = ''
  @Column('int')
  active = 0
  @Column('int')
  status = 0
  @Column('varchar')
  address = ''
  @Column('int')
  city = 0
  @Column('int')
  state = 0
  @Column('int')
  country = 0
  @Column('int')
  numUsers = 0
  @Column('date')
  creationDate = ''
  @Column({ type: 'date', nullable: true })
  modificationDate = ''
  @Column({ type: 'date', nullable: true })
  activationDate = null
}
