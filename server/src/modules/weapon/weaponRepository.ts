import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Weapon = {
  id: number;
  type: string;
  color: number;
  person_id: number;
};

class WeaponRepository {
  // The C of CRUD - Create operation

  async create(weapon: Omit<Weapon, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into item (title, user_id) values (?, ?)",
      [weapon.type, weapon.color],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from weapon where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Weapon;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from weapon");

    // Return the array of items
    return rows as Weapon[];
  }
  async update(weapon: Weapon) {
    // Execute the SQL UPDATE query to update an existing category in the "category" table
    const [result] = await databaseClient.query<Result>(
      "update weapon set type = ?, color= ? where id = ?",
      [weapon.type, weapon.color, weapon.id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from weapon where id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new WeaponRepository();
