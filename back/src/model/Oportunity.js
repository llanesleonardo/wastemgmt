import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Oportunity {
  @PrimaryGeneratedColumn()
  id = undefined

  @Column('varchar')
  name = ''
  @Column('text')
  initialComments = ''
  @Column('varchar')
  urlOportunityPhoto = ''
  @Column('varchar')
  urlSolutionPhoto = ''
  @Column('text')
  solutionDescription = ''
  @Column('int')
  numPlantas = 0
  @Column('int')
  surco = 0
  @Column('int')
  campo = 0
  @Column('int')
  cuadro = 0
  @Column('int')
  variedad = 0
  @Column('int')
  statusOportunity = 0
  @Column('int')
  solution = 0
  @Column('int')
  category = 0
  @Column('date')
  creationDate = ''
  @Column('date')
  estimatedSolutionDate = ''
  @Column({ type: 'date', nullable: true })
  realSolutionDate = ''
  @Column({ type: 'date', nullable: true })
  modificationDate = ''
}
