import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Storage{
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   storageName: string;

   @Column()
   storageCode: number;

   @Column()
   city: string;

   @Column()
   province: string;

   @Column()
   address: string;
}