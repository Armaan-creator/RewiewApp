import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userId:string

    @Column()
    breweryId:string;
    @Column()
    username:string;
    @Column()
    rating:number
    @Column()
    review:string;

  
}
