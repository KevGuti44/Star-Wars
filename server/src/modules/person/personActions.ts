import type { RequestHandler } from "express";

// Import access to data
import personRepository from "./personRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const persons = await personRepository.readAll();

    // Respond with the items in JSON format
    res.json(persons);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const personId = Number(req.params.id);
    const person = await personRepository.read(personId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (person == null) {
      res.sendStatus(404);
    } else {
      res.json(person);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const edit: RequestHandler = async (req, res, next) => {
  try {
    // Update a specific category based on the provided ID
    const person = {
      id: req.body.id,
      name: req.body.name,
      age: req.body.age,
      description: req.body.description,
      img: req.body.description,
      power: req.body.power,
      weapon_id: req.body.weapon_id,
    };

    const affectedRows = await personRepository.update(person);

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
    const newPerson = {
      name: req.body.name,
      age: req.body.age,
      description: req.body.description,
      img: req.body.img,
      power: req.body.power,
      weapon_id: req.body.weapon_id,
    };

    // Create the item
    const insertId = await personRepository.create(newPerson);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const destroy: RequestHandler = async (req, res, next) => {
  try {
    const personId = Number(req.params.id);
    await personRepository.delete(personId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
const getPowerJedi: RequestHandler = async (req, res, next) => {
  try {
    const powerJedi = await personRepository.readByPower("Jedi");
    res.json(powerJedi);
  } catch (error) {
    next(error);
  }
};
export default { browse, read, add, edit, destroy, getPowerJedi };
