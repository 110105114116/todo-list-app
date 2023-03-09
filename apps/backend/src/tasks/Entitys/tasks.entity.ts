import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

enum TaskStatus {
  C = 'completed',
  IC = 'incompleted'
}

@Entity({ name: 'tasks' })
export class Tasks {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.IC
  })
  status: string

  @Column({
    type: 'boolean',
    default: false
  })
  isDelete: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)'
  })
  createdat: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  updatedat: Date;
}