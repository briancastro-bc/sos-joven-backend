import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Entity as BaseEntity } from '@shared/domain/persistence/entity';
import { collectionToString } from 'arangojs/collection';

@Entity()
export class User implements BaseEntity {

  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column()
  given_name: string;

  @Column()
  middle_name: string;

  @Column()
  family_name: string;

  @Column()
  full_name?: string;

  @Column()
  preferred_username: string;

  @Column()
  nickname: string;

  @Column() 
  email: string;

  @Column()
  password: string;


}