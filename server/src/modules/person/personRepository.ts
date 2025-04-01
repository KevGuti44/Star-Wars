import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Person = {
  id: number;
  name: string;
  age: number;
  description: string;
  img: string;
  power: string;
  weapon_id: number;
};

class PersonRepository {
  // The C of CRUD - Create operation

  async create(person: Omit<Person, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into person (name, age, description, img, power) values (?, ?, ?, ?, ?)",
      [person.name, person.age, person.description, person.img, person.power],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from person where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Person;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from person ");

    // Return the array of items
    return rows as Person[];
  }
  async update(person: Person) {
    // Execute the SQL UPDATE query to update an existing category in the "category" table
    const [result] = await databaseClient.query<Result>(
      "update person set name = ?, age = ?, description = ?, img = ?, power = ? where id = ?",
      [
        person.name,
        person.age,
        person.description,
        person.img,
        person.power,
        person.id,
      ],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from person where id = ?",
      [id],
    );
    return result.affectedRows;
  }
  async readByPower(power: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from person where power = ?",
      [power],
    );
    return rows;
  }
}

export default new PersonRepository();
