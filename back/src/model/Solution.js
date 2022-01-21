import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Solution {
  @PrimaryGeneratedColumn()
  id = undefined

  @Column('varchar')
  name = ''
  @Column('text')
  comments = ''
  @Column('varchar')
  urlSolutionPhoto = ''
  @Column('date')
  creationDate = ''
  @Column({ type: 'date', nullable: true })
  modificationDate = ''
}
