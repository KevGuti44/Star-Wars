import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

import personActions from "./modules/person/personActions";
import weaponActions from "./modules/weapon/weaponActions";

router.get("/api/person", personActions.browse);
router.get("/api/person/Jedi", personActions.getPowerJedi);
router.get("/api/person/Sith", personActions.getPowerSith);
router.get("/api/person/:id", personActions.read);
router.put("/api/person/:id", personActions.edit);
router.post("/api/person", personActions.add);
router.delete("/api/person", personActions.destroy);

router.get("/api/weapon", weaponActions.browse);
router.get("/api/weapon/:id", weaponActions.read);
router.put("/api/weapon/:id", weaponActions.edit);
router.post("/api/weapon", weaponActions.add);
router.delete("/api/weapon", weaponActions.destroy);

/* ************************************************************************* */

export default router;
