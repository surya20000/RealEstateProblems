import express from "express";
import { postProblems, getProblems } from "../Controllers/user.Controllers.js";

const router = express.Router();

router.post("/postProblems", postProblems);

router.post("/getProblems", getProblems);

export default router;
