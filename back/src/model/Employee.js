import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from 'typeorm'

import { User } from '@entities/User'

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id = undefined
  @Column('varchar')
  name = ''
  @Column('varchar')
  lastname = ''
  @Column('varchar')
  email = ''
  @Column('int')
  department = 0
  @Column('int')
  area = 0
  @Column('int')
  position = 0
  @Column('date')
  creationDate = ''
  @Column({ type: 'date', nullable: true })
  modificationDate = ''
  @Column('varchar')
  mobile = ''
  @Column('int')
  active = 0
  @Column({ type: 'varchar', nullable: true })
  urlPhoto = ''
  @Column('int')
  isUser = 0
  @Column('int')
  company = 0
  @OneToOne(() => User)
  @JoinColumn()
  userId = User
}

/**
INSERT INTO employee (name,lastname,email,department,position,mobile,active,urlPhoto,area,isUser,company,userIdId,creationDate,modificationDate) VALUES ('Leonardo','Llanes','llanesleonardo@gmail.com',1,1,'6622001854',1,'http://',1,1,1,null,CURDATE(),'2008-7-04');
 */
