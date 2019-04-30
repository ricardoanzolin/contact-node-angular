import { Entity, PrimaryGeneratedColumn, Column, createConnection, Connection, Repository } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  twitter: string;

  @Column()
  phone: string;

}

let connection: Connection;

export async function getContactRepository(): Promise<Repository<Contact>> {
  if (connection === undefined) {
    connection = await createConnection({
      type: 'sqlite',
      database: 'myangularapp',
      synchronize: true,
      entities: [
        Contact
      ],
    });
  }
  return connection.getRepository(Contact);
}