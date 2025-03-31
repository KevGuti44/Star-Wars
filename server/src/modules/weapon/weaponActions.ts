import type { RequestHandler } from "express";

// Import access to data
import weaponRepository from "./weaponRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const weapons = await weaponRepository.readAll();

    // Respond with the items in JSON format
    res.json(weapons);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const weaponId = Number(req.params.id);
    const weapon = await weaponRepository.read(weaponId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (weapon == null) {
      res.sendStatus(404);
    } else {
      res.json(weapon);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const edit: RequestHandler = async (req, res, next) => {
  try {
    // Update a specific category based on the provided ID
    const weapon = {
      id: req.body.id,
      type: req.body.type,
      color: req.body.color,
      person_id: req.body.person_id,
    };

    const affectedRows = await weaponRepository.update(weapon);

    // If the category is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the category in JSON format
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the item data from the request body
    const newWeapon = {
      type: req.body.type,
      color: req.body.color,
      person_id: req.body.person_id,
    };

    // Create the item
    const insertId = await weaponRepository.create(newWeapon);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const destroy: RequestHandler = async (req, res, next) => {
  try {
    const weaponId = Number(req.params.id);
    await weaponRepository.delete(weaponId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
