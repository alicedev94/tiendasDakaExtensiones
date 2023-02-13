const { Router } = require("express");
import { sqlGet } from "../controllers/basicController";

const router = Router();

// working api/v1/
router.get("/", sqlGet);
router.post("/api/v1/create");
router.put("/api/v1/update");
router.delete("/api/v1/delete");

module.exports = router;
