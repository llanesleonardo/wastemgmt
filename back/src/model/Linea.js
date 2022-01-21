import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Linea {
  @PrimaryGeneratedColumn()
  id = undefined

  @Column('varchar')
  name = ''
  @Column('text')
  description = ''
  @Column('date')
  creationDate = ''
  @Column({ type: 'date', nullable: true })
  modificationDate = ''
}
